import express from "express";
import healthCheckRouter from "./healthCheck";
import authRouter from "./auth";
import userRouter from "./user";
import categoryRouter from "./category";
import instanceRouter from "./instance";
import { authenticate } from "../utils/authMiddleware";

let router = express.Router();

/**
 * USE  /api/v1/health-check/*
 */
router.use("/health-check", healthCheckRouter);

/**
 * USE  /api/v1/user/*
 */
router.use("/user", authenticate, userRouter);

/**
 * USE  /api/v1/instance/*
 */
router.use("/instance", authenticate, instanceRouter);

/**
 * USE  /api/v1/category/*
 */
router.use("/category", authenticate, categoryRouter);

/**
 * USE  /api/v1/auth/*
 */
router.use("/auth", authRouter);

export default router;
