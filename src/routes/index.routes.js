import express from 'express';

// Importar todas as rotas
import authRouter from './auth.routes.js';
import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js"; // Caminho corrigido
import postRoutes from "./postRoutes.js"; // Caminho corrigido
import commentRoutes from "./commentRoutes.js"; // Caminho corrigido
import likeRoutes from "./likeRoutes.js"; // Caminho corrigido

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.use('/auth', authRouter);

// Rotas protegidas
router.use(authMiddleware);

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/post", postRoutes); 
router.use("/comments", commentRoutes); 
router.use("/likes", likeRoutes); 

export default router;