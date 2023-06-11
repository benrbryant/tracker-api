import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const CategorySchema = mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  template: { type: String },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    require: true,
  },
});

/**
 * @type {mongoose.Model}
 */
const Category = mongoose.model("Category", CategorySchema);

export default Category;
