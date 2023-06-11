import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const REQUEST_RATE_TIME_LIMIT = 60000; // milliseconds
export const MAX_REQUEST_COUNT_LIMIT = 20;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const AUTH0_ISSUER = process.env.AUTH0_ISSUER;
