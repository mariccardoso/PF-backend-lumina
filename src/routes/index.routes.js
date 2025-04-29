import express from 'express';

// Importar todas as rotas
import authRouter from './auth.routes.js';
import animeRouter from './animeRoutes.js';
import personagensRouter from './personagemRoutes.js';
import collectionRouter from './collectionRoutes.js';
import cardRouter from './cardRoutes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.use('/auth', authRouter);

// Rotas protegidas
router.use(authMiddleware);

router.use('/animes', animeRouter);
router.use('/personagens', personagensRouter);
router.use('/colecoes', collectionRouter);
router.use('/cards', cardRouter);

export default router;