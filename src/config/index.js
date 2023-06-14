import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const REQUEST_RATE_TIME_LIMIT = 60000; // milliseconds
export const MAX_REQUEST_COUNT_LIMIT = 20;
export const BASE_URL = process.env.BASE_URL;
export const AUTH_SECRET = process.env.AUTH_SECRET;
export const AUTH_CLIENTID = process.env.AUTH_CLIENTID;
export const AUTH_ISSUER = process.env.AUTH_ISSUER;
