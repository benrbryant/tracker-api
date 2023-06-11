import express from "express";

import {
  authorCreateGet,
  authorCreatePost,
  authorDeleteGet,
  authorDeletePost,
  authorDetail,
  authorList,
  authorUpdateGet,
  authorUpdatePost,
  index,
} from "../controllers/accountController";

const router = express.Router();

/**
 * GET  /catalog/author/create
 */
router.get("/create", authorCreateGet);

/**
 * POST  /catalog/author/create
 */
router.post("/create", authorCreatePost);

/**
 * GET  /catalog/author/:id/delete
 */
router.get("/:id/delete", authorDeleteGet);

/**
 * POST  /catalog/author/:id/delete
 */
router.get("/:id/delete", authorDeletePost);

/**
 * GET  /catalog/author/:id/update
 */
router.get("/:id/update", authorUpdateGet);

/**
 * POST  /catalog/author/:id/update
 */
router.get("/:id/update", authorUpdatePost);

/**
 * GET  /catalog/author/:id
 */
router.get("/:id", authorDetail);

/**
 * GET  /catalog/authors/list
 */
router.get("/list", authorList);

export default router;
