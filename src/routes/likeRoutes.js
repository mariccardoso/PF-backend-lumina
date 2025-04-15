import express from "express";
import likeController from "../controllers/likeController.js";
const router = express.Router();

router.get("/", likeController.getAll);
router.get("/:id", likeController.getById); 
router.post("/", likeController.create);
router.put("/:id", likeController.update);
router.delete("/:id", likeController.delete);

export default router;