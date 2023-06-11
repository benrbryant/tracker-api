import express from "express";

import {
  genreCreateGet,
  genreCreatePost,
  genreDeleteGet,
  genreDeletePost,
  genreDetail,
  genreList,
  genreUpdateGet,
  genreUpdatePost,
  index,
} from "../../controllers/genreController";

const router = express.Router();

/**
 * GET  /catalog/genre/create
 */
router.get("/create", genreCreateGet);

/**
 * POST  /catalog/genre/create
 */
router.post("/create", genreCreatePost);

/**
 * GET  /catalog/genre/:id/delete
 */
router.get("/:id/delete", genreDeleteGet);

/**
 * POST  /catalog/genre/:id/delete
 */
router.get("/:id/delete", genreDeletePost);

/**
 * GET  /catalog/genre/:id/update
 */
router.get("/:id/update", genreUpdateGet);

/**
 * POST  /catalog/genre/:id/update
 */
router.get("/:id/update", genreUpdatePost);

/**
 * GET  /catalog/genre/:id
 */
router.get("/:id", genreDetail);

/**
 * GET  /catalog/genres/list
 */
router.get("/list", genreList);

export default router;
