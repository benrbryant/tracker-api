import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import categoryRouter from "./category";
import instanceRouter from "./instance";

let router = express.Router();

/**
 * USE  /api/v1/user/*
 */
router.use("/user", userRouter);

/**
 * USE  /api/v1/instance/*
 */
router.use("/instance", instanceRouter);

/**
 * USE  /api/v1/category/*
 */
router.use("/category", categoryRouter);

/**
 * USE  /api/v1/auth/*
 */
router.use("/auth", authRouter);

export default router;
