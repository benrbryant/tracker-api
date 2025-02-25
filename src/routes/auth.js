import express from "express";
import passport from "passport";
import {
  postLogin,
  postLogout,
  postRefreshToken,
  postSignup,
} from "../controllers/authController";
import { authenticate } from "../utils/authMiddleware";

const router = express.Router();

router.post("/signup", postSignup);

router.post("/logout", authenticate, postLogout);

router.post("/login", passport.authenticate("local", { session: false }), postLogin);

router.post("/refresh-token", postRefreshToken);

export default router;
