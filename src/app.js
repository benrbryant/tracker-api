import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { rateLimit } from "express-rate-limit";
import { initDBConnection } from "./db";
import routes from "./routes/index";
import {
  MAX_REQUEST_COUNT_LIMIT,
  REQUEST_RATE_TIME_LIMIT,
} from "./config";
import { jwtStrategy, localStrategy } from "./utils/authMiddleware";

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

app.use(limiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/api/v1", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err);

  let errStatus = err.status || 500;
  res.status(errStatus).json({ message: `${errStatus}: ${err.message}` });
});

export default app;
