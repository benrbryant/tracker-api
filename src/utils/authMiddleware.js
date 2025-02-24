import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "../config";

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
    jwt.verify(token, AUTH_SECRET, (err, username) => {
      if (err) {
        next(createHttpError(403));
      }

      req.user = username;

      next();
    });
  } else {
    next(createHttpError(401));
  }
};