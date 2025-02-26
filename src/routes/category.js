import express from "express";
import {
  createOne,
  deleteOne,
  getAllByUser,
  getOneById,
  updateOne,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/all", getAllByUser);

router.get("/one/:id", getOneById);

router.post("/add", createOne);

router.put("/update/:id", updateOne);

router.delete("/delete/:id", deleteOne);

export default router;
