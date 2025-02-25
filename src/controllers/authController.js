import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import asyncHandler from "../utils/asyncHandler";
import User from "../db/models/user";
import { generateAccessToken, generateRefreshToken } from "../utils/jwtUtils";
import { REFRESH_TOKEN_SECRET } from "../config";
import RefreshToken from "../db/models/refreshtokens";

export const postSignup = asyncHandler(async (req, res, next) => {
  let { username, email, firstName, lastName, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    next(createHttpError(400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    email,
    username,
    firstName,
    lastName,
    password: hashedPassword,
  });
  await user.save();

  res.json({ message: "Successfully created user" });
});

export const postLogin = asyncHandler(async (req, res, next) => {
  const tokenPayload = { userId: req.user._id, username: req.user.userId };
  const token = generateAccessToken(tokenPayload);
  const refreshToken = generateRefreshToken(tokenPayload);

  await RefreshToken.create({
    userId: req.user._id,
    token: refreshToken,
  });

  res.json({
    message: "Successful login",
    user: {
      userId: req.user._id,
      username: req.user.username,
    },
    token,
    refreshToken,
  });
});

export const postLogout = asyncHandler(async (req, res, next) => {
  let userId = req.user && req.user.userId;

  if (!userId) {
    next(createHttpError(400));
  }

  await RefreshToken.deleteMany({ userId });
  res.json({ message: "User is logged out." });
});

export const postRefreshToken = asyncHandler(async (req, res, next) => {
  let { refreshToken } = req.body;

  if (!refreshToken) {
    next(createHttpError(401));
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, user) => {
    const storedToken = await RefreshToken.findOne({
      userId: user.userId,
      token: refreshToken,
    });

    if (!storedToken) {
      next(createHttpError(403));
    }

    const existingUser = await User.findOne({
      userId: user.userId,
    });

    if (!user) {
      next(createHttpError(403));
    }

    let accessToken = generateAccessToken({
      userId: existingUser.userId,
      username: existingUser.username,
    });

    res.json({ token: accessToken });
  });
});
