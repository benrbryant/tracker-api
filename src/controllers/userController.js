import asyncHandler from "../utils/asyncHandler";

export const getCurrentUser = asyncHandler((req, res, next) => {
  res.json({
    data: req.user,
  });
});
