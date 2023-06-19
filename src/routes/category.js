import express from "express";
import {
  createOne,
  deleteOne,
  getAllByUsername,
  getOneById,
  updateOne,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/all", getAllByUsername);

router.get("/one/:id", getOneById);

router.post("/add", createOne);

router.put("/update/:id", updateOne);

router.delete("/delete/:id", deleteOne);

export default router;
