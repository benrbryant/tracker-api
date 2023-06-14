import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { rateLimit } from "express-rate-limit";

import { initDBConnection } from "./db";
import routes from "./routes/index";
import { MAX_REQUEST_COUNT_LIMIT, REQUEST_RATE_TIME_LIMIT } from "./config";
import authMiddleware from "./utils/authMiddleware";
import { requiresAuth } from "express-openid-connect";

let app = express();

let limiter = rateLimit({
  windowMs: REQUEST_RATE_TIME_LIMIT, // 1 minute
  max: MAX_REQUEST_COUNT_LIMIT,
});

// connect to db
initDBConnection();

app.use(helmet());
app.use(compression());
app.use(cors());

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(authMiddleware);

app.use(limiter);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", routes);

app.get("/", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({ err: err.stack });
});

export default app;
