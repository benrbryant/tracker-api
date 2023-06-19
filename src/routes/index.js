import express from "express";
import authRouter from "./auth";
import isLoggedIn from "../utils/authMiddleware";
import { getCurrentUser } from "../controllers/userController";

let router = express.Router();

/**
 * GET  /api/v1/test
 */
router.get("/currentUser", isLoggedIn, getCurrentUser);

/**
 * USE  /api/v1/auth/*
 */
router.use("/auth", authRouter);

export default router;
