import asyncHandler from "../utils/asyncHandler";
import BookInstance from "../db/models/bookinstance";

export const bookinstanceList = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance list");
});

export const bookinstanceDetail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance detail: " + req.params.id);
});

export const bookinstanceCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance create GET");
});

export const bookinstanceCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance create POST");
});

export const bookinstanceDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance delete GET");
});

export const bookinstanceDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance delete POST");
});

export const bookinstanceUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance update GET");
});

export const bookinstanceUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance update POST");
});
