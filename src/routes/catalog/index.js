import express from "express";

import bookRoutes from "./books";
import bookinstanceRoutes from "./bookinstance";
import genreRoutes from "./genre";
import authorRoutes from "./authors";

const router = express.Router();

router.use("/author", authorRoutes);
router.use("/genre", genreRoutes);
router.use("/bookinstance", bookinstanceRoutes);
router.use("/book", bookRoutes);

export default router;
