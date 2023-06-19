import express from "express";
import passport from "passport";
import {
  postLogin,
  postLogout,
  postSignup,
} from "../../controllers/authController";

const router = express.Router();

router.post("/signup", postSignup);

router.post("/logout", postLogout);

router.post("/login", passport.authenticate("local"), postLogin);

export default router;
