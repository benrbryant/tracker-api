import Category from "../db/models/category";
import asyncHandler from "../utils/asyncHandler";

export const getAllByUsername = asyncHandler(async (req, res, next) => {
  let categories = await Category.find({ user: req.user._id });
  res.json({ data: categories });
});

export const getOneById = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let category = await Category.findOne({ _id: id });
  res.json({ data: category });
});

export const createOne = asyncHandler(async (req, res, next) => {
  let { name, template } = req.body;

  let newCategory = await Category.create({
    user: req.user._id,
    name,
    template,
  });

  res.json({ message: "Successfully created category", data: newCategory });
});

export const updateOne = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let updateObj = req.body;
  let updatedCategory = await Category.updateOne({ _id: id }, updateObj);
  res.json({ message: "Successfully updated category", data: updatedCategory });
});

export const deleteOne = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let deletedCategory = await Category.deleteOne({ _id: id });
  res.json({ message: "Successfully deleted category", date: deletedCategory });
});
