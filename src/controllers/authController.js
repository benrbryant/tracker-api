import asyncHandler from "../utils/asyncHandler";
import User from "../db/models/user";
import { generateAccessToken } from "../utils/jwtUtils";

export const postSignup = asyncHandler(async (req, res, next) => {
  let { username, email, firstName, lastName, password } = req.body;
  User.register(
    new User({
      username,
      email,
      firstName,
      lastName,
    }),
    password,
    function (err, msg) {
      if (err) {
        next(err);
      } else {
        const token = generateAccessToken(username);
        res.json({ message: "Successfully created new user", username, token });
      }
    }
  );
});

export const postLogin = asyncHandler(async (req, res, next) => {
  const token = generateAccessToken(req.session.passport.user);
  res.json({
    message: "Successful login",
    username: req.session.passport.user,
    token,
  });
});

export const postLogout = asyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);

    res.json({ message: "User is logged out." });
  });
});
