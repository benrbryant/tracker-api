import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const InstanceSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
});

/**
 * @type {mongoose.Model}
 */
const Instance = mongoose.model("Instance", InstanceSchema);

export default Instance;
