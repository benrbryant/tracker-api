import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const AuthorSchema = mongoose.Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullName = "";

  if (this.first_name && this.last_name) {
    fullName = `${this.first_name} ${this.last_name}`;
  }

  return fullName;
});

AuthorSchema.virtual("url").get(function () {
  return `/catelog/author/${this._id}`;
});

/**
 * @type {mongoose.Model}
 */
const Author = mongoose.model("Author", AuthorSchema);

export default Author;
