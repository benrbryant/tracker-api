import express from "express";

let router = express.Router();

/**
 * GET  /api/v1/test
 */
router.get("/test", (req, res, next) => {
  res.json({
    message: "test succeeded",
    auth: req.oidc.isAuthenticated() ? "Logged in" : "Logged out",
  });
});

export default router;
