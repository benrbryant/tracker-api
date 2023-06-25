import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import categoryRouter from "./category";
import instanceRouter from "./instance";
import isLoggedIn from "../utils/authMiddleware";

let router = express.Router();

/**
 * USE  /api/v1/user/*
 */
router.use("/user", isLoggedIn, userRouter);

/**
 * USE  /api/v1/instance/*
 */
router.use("/instance", isLoggedIn, instanceRouter);

/**
 * USE  /api/v1/category/*
 */
router.use("/category", isLoggedIn, categoryRouter);

/**
 * USE  /api/v1/auth/*
 */
router.use("/auth", authRouter);

export default router;
