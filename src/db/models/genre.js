import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const GenreSchema = mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

export default mongoose.model("Genre", GenreSchema);
