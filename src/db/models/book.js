import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const BookSchema = mongoose.Schema({
  title: { type: String, require: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    require: true,
  },
  summary: { type: String, require: true },
  isbn: { type: String, require: true },
  genre: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
});

BookSchema.virtual("url").get(function () {
  return `/catalog/book/${this._id}`;
});

export default mongoose.model("Book", BookSchema);
