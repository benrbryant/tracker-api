import express from "express";

let router = express.Router();

/* GET  /user */
router.get("/", function (req, res, next) {
  res.send("NOT IMPLEMENTED: user listing");
});

export default router;
