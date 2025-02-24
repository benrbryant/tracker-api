import jwt from "jsonwebtoken";
import { AUTH_SECRET, SESSION_EXPIRATION } from "../config";

export function generateAccessToken(username) {
  return jwt.sign({ username }, AUTH_SECRET, { expiresIn: SESSION_EXPIRATION });
}
