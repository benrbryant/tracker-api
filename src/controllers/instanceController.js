import Instance from "../db/models/instance";
import asyncHandler from "../utils/asyncHandler";

export const getAll = asyncHandler(async (req, res, next) => {
  let details = {
    user: req.user._id,
  };

  if (req.query.categoryId) {
    details.category = req.query.categoryId;
  }

  let instances = await Instance.find(details).populate("category");
  res.json({ data: instances });
});

export const getOneById = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let instance = await Instance.findOne({ _id: id });
  res.json({ data: instance });
});

export const createOne = asyncHandler(async (req, res, next) => {
  let { description, startDate, endDate, categoryId } = req.body;
  let details = {
    category: categoryId,
    user: req.user._id,
    description,
    startDate,
    endDate,
  };

  let newInstance = await Instance.create(details);

  res.json({ message: "Successfully created instance", data: newInstance });
});

export const updateOne = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let details = req.body;
  let updatedInstance = await Instance.updateOne({ _id: id }, details);
  res.json({ message: "Successfully updated instance", data: updatedInstance });
});

export const deleteOne = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let deletedInstance = await Instance.deleteOne({ _id: id });
  res.json({ message: "Successfully deleted instance", date: deletedInstance });
});