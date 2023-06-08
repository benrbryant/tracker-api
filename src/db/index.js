import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

// Set up mongoose connection
mongoose.set("strictQuery", false);

export async function initDBConnection() {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error(error);
  }
}
