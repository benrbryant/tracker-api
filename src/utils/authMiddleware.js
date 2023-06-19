import createHttpError from "http-errors";

export default function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createHttpError(401));
  }
}
