import asyncHandler from "../utils/asyncHandler";
import User from "../db/models/user";

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
        res.json({ message: "Successfully created new user" });
      }
    }
  );
});

export const postLogin = asyncHandler(async (req, res, next) => {
  res.json({
    message: "Successful login",
    username: req.session.passport.user,
  });
});

export const postLogout = asyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);

    res.json({ message: "User is logged out." });
  });
});
