import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
export const REQUEST_RATE_TIME_LIMIT = 60000; // ms
export const MAX_REQUEST_COUNT_LIMIT = 20;
export const SESSION_EXPIRATION = 1000 * 60 * 60 * 24 * 7; // 1 week in ms
export const ACCESS_TOKEN_EXPIRATION = "15m"; // 15 minutes
export const REFRESH_TOKEN_EXPIRATION = "7d"; // 1 week
export const AUTH_SECRET = process.env.AUTH_SECRET;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
