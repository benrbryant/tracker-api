import express from "express";

import catalogRoutes from "./catalog";
import userRoutes from "./users";

let router = express.Router();

/**
 * GET  /
 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * GET  /user
 */
router.use("/user", userRoutes);

/**
 * ANY  /catalog
 */

router.use("/catalog", catalogRoutes);

export default router;
