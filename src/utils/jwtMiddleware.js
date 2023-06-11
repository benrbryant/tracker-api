import { expressjwt } from "express-jwt";
import JwksRsa from "jwks-rsa";
import {
  AUTH0_AUDIENCE,
  AUTH0_ISSUER,
  MAX_REQUEST_COUNT_LIMIT,
} from "../config";

const checkJwt = expressjwt({
  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: MAX_REQUEST_COUNT_LIMIT,
    jwksUri: `https://dev-rq62inof.us.auth0.com/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: AUTH0_AUDIENCE,
  issuer: AUTH0_ISSUER,
  algorithms: ["RS256"],
});

export default checkJwt;
