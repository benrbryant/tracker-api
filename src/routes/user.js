import express from "express";
import isLoggedIn from "../utils/authMiddleware";
import { getCurrentUser } from "../controllers/userController";

const router = express.Router();

/**
 * GET  /api/v1/user/current
 */
router.get("/current", isLoggedIn, getCurrentUser);

export default router;
