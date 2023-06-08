import asyncHandler from "../utils/asyncHandler";
import Author from "../db/models/author";

export const authorList = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
});

export const authorDetail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
});

export const authorCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
});

export const authorCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
});

export const authorDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

export const authorDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

export const authorUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

export const authorUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
