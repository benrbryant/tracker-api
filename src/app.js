import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import MongoStore from "connect-mongo";
import User from "./db/models/user";
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
  MONGODB_URL,
  AUTH_SECRET,
  SESSION_EXPIRATION,
} from "./config";

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
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: AUTH_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: MONGODB_URL,
      touchAfter: 24 * 3600, // seconds, 1 day
    }),
    cookie: {
      maxAge: SESSION_EXPIRATION,
    },
  })
);

const strategy = new Strategy(User.authenticate());
passport.use(strategy);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

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
