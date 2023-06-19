import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

/**
 * @type {mongoose.Schema}
 */
const UserSchema = mongoose.Schema({
  firstName: { type: String, maxLength: 100, required: true },
  lastName: { type: String, maxLength: 100, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
});

UserSchema.virtual("name").get(function () {
  let fullName = "";

  if (this.firstName && this.lastName) {
    fullName = `${this.firstName} ${this.lastName}`;
  }

  return fullName;
});

UserSchema.plugin(passportLocalMongoose);

/**
 * @type {mongoose.Model}
 */
const User = mongoose.model("User", UserSchema);

export default User;
