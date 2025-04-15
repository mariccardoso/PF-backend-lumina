import express from "express";
import postController from "../controllers/postController.js";
const router = express.Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getById); 
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

export default router;