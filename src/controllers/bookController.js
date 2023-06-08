import asyncHandler from "../utils/asyncHandler";
import Book from "../db/models/book";

export const index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site home page");
});

export const bookList = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book list");
});

export const bookDetail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book detail: " + req.params.id);
});

export const bookCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book create GET");
});

export const bookCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book create POST");
});

export const bookDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book delete GET");
});

export const bookDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book delete POST");
});

export const bookUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book update GET");
});

export const bookUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book update POST");
});
