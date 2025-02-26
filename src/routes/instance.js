import express from "express";
import {
  getAllByUser,
  createOne,
  deleteOne,
  getOneById,
  updateOne,
} from "../controllers/instanceController";

const router = express.Router();

router.get("/all", getAllByUser);

router.get("/one/:id", getOneById);

router.post("/add", createOne);

router.put("/update/:id", updateOne);

router.delete("/delete/:id", deleteOne);

export default router;
