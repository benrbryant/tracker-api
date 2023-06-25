import express from "express";
import { getCurrentUser } from "../controllers/userController";

const router = express.Router();

/**
 * GET  /api/v1/user/current
 */
router.get("/current", getCurrentUser);

export default router;
