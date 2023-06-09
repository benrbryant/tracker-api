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

/**
 * @type {mongoose.Model}
 */
const Genre = mongoose.model("Genre", GenreSchema);

export default Genre;
