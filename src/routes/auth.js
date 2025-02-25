import express from "express";
import passport from "passport";
import {
  postLogin,
  postLogout,
  postRefreshToken,
  postSignup,
} from "../controllers/authController";

const router = express.Router();

router.post("/signup", postSignup);

router.post("/logout", postLogout);

router.post("/login", passport.authenticate("local", { session: false }), postLogin);

router.post("/refresh-token", postRefreshToken);

export default router;
