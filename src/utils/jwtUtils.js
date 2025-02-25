import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRATION, REFRESH_TOKEN_SECRET } from "../config";

export function generateAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
}

