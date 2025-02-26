import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { ACCESS_TOKEN_SECRET } from "../config";
import User from "../db/models/user";

export function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createHttpError(401));
  }
}

export function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  let token;

  if (authHeader) {
    token = authHeader.split(" ")[1] || "";
  }

  if (token) {
    try {
      let user = jwt.verify(token, ACCESS_TOKEN_SECRET);
      req.user = user;

      next();
    } catch (error) {
      console.error(error);
      next(createHttpError(403));
    }
  } else {
    next(createHttpError(401));
  }
}

export const authenticateJwt = passport.authenticate("jwt", { session: false });

export const localStrategy = new LocalStrategy(async function (
  username,
  password,
  done
) {
  let existingUser = await User.findOne({ username });

  if (!existingUser) {
    return done(null, false);
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!validPassword) {
    return done(null, false, { message: "Invalid credentials" });
  }

  return done(null, existingUser);
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ACCESS_TOKEN_SECRET,
};

export const jwtStrategy = new JwtStrategy(
  jwtOptions,
  async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload._id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  }
);
