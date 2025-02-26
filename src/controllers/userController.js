import createHttpError from "http-errors";
import User from "../db/models/user";
import asyncHandler from "../utils/asyncHandler";

export const getCurrentUser = asyncHandler(async (req, res, next) => {
  let currentUser = await User.findById(req.user._id, {
    firstName: 1,
    lastName: 1,
    username: 1,
    email: 1,
  });

  if (!currentUser) {
    return next(createHttpError(404));
  }

  res.json({
    data: currentUser,
  });
});
