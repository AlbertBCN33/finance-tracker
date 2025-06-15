import { Router } from 'express';
import authRouter from './auth.route';
import indexFundsRouter from './index-funds.route';
import stocksRouter from './stocks.route';
import wihslistsRouter from './wishlists.route';

const router = Router();

// Add all sub-routers here
router.use('/auth', authRouter);
router.use('/index-funds', indexFundsRouter);
router.use('/stocks', stocksRouter);
router.use('/wishlists', wihslistsRouter);

export default router;
