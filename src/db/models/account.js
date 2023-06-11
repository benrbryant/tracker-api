import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const AuthorSchema = mongoose.Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  lastName: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  dob: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullName = "";

  if (this.firstName && this.lastName) {
    fullName = `${this.firstName} ${this.lastName}`;
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
