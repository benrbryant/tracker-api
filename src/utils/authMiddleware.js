import { AUTH_SECRET, AUTH_CLIENTID, AUTH_ISSUER, BASE_URL } from "../config";
import { auth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH_SECRET,
  baseURL: BASE_URL,
  clientID: AUTH_CLIENTID,
  issuerBaseURL: AUTH_ISSUER,
};

const authMiddleware = auth(config);

export default authMiddleware;
