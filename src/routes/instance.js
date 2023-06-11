import express from "express";

import {
  bookinstanceCreateGet,
  bookinstanceCreatePost,
  bookinstanceDeleteGet,
  bookinstanceDeletePost,
  bookinstanceDetail,
  bookinstanceList,
  bookinstanceUpdateGet,
  bookinstanceUpdatePost,
  index,
} from "../../controllers/bookinstanceController";

const router = express.Router();

/**
 * GET  /catalog/bookinstance/create
 */
router.get("/create", bookinstanceCreateGet);

/**
 * POST  /catalog/bookinstance/create
 */
router.post("/create", bookinstanceCreatePost);

/**
 * GET  /catalog/bookinstance/:id/delete
 */
router.get("/:id/delete", bookinstanceDeleteGet);

/**
 * POST  /catalog/bookinstance/:id/delete
 */
router.get("/:id/delete", bookinstanceDeletePost);

/**
 * GET  /catalog/bookinstance/:id/update
 */
router.get("/:id/update", bookinstanceUpdateGet);

/**
 * POST  /catalog/bookinstance/:id/update
 */
router.get("/:id/update", bookinstanceUpdatePost);

/**
 * GET  /catalog/bookinstance/:id
 */
router.get("/:id", bookinstanceDetail);

/**
 * GET  /catalog/bookinstances/list
 */
router.get("/list", bookinstanceList);

export default router;
