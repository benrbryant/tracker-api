import express from "express";

import {
  bookCreateGet,
  bookCreatePost,
  bookDeleteGet,
  bookDeletePost,
  bookDetail,
  bookList,
  bookUpdateGet,
  bookUpdatePost,
  index,
} from "../../controllers/bookController";

const router = express.Router();

/**
 * GET  /catalog/book
 */
router.get("/", index);

/**
 * GET  /catalog/book/create
 */
router.get("/create", bookCreateGet);

/**
 * POST  /catalog/book/create
 */
router.post("/create", bookCreatePost);

/**
 * GET  /catalog/book/:id/delete
 */
router.get("/:id/delete", bookDeleteGet);

/**
 * POST  /catalog/book/:id/delete
 */
router.get("/:id/delete", bookDeletePost);

/**
 * GET  /catalog/book/:id/update
 */
router.get("/:id/update", bookUpdateGet);

/**
 * POST  /catalog/book/:id/update
 */
router.get("/:id/update", bookUpdatePost);

/**
 * GET  /catalog/book/:id
 */
router.get("/:id", bookDetail);

/**
 * GET  /catalog/book/list
 */
router.get("/list", bookList);

export default router;
