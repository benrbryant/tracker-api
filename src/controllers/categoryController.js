import asyncHandler from "../utils/asyncHandler";
import Category from "../db/models/category";

export const getAllCategories = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre list");
});

export const genreDetail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre detail: " + req.params.id);
});

export const genreCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre create GET");
});

export const genreCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre create POST");
});

export const genreDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre delete GET");
});

export const genreDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre delete POST");
});

export const genreUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre update GET");
});

export const genreUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: genre update POST");
});
