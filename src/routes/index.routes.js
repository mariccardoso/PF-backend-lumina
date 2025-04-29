import express from 'express';

// Importar todas as routas
import authRouter from './auth.routes.js';
import categoryRouter from "./categoryRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js"; // Importando as rotas de comentários
import likeRouter from "./likeRoutes.js"; // Importando as rotas de likes


import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.use('/auth', authRouter);

// Rotas privadas (protegidas por autenticação)
router.use(authMiddleware); // Middleware de autenticação

router.use("/categories", categoryRouter);
router.use("/post", postRouter); // Adicione esta linha para incluir as rotas de postagens
router.use("/comments", commentRouter); // Adicione esta linha para incluir as rotas de comentários
router.use("/likes", likeRouter); // Adicione esta linha para incluir as rotas de likes

export default router;