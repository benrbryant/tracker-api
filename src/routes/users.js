import express from "express";

let router = express.Router();

router.get("/", function (req, res, next) {
  res.send("NOT IMPLEMENTED: user");
});

export default router;
