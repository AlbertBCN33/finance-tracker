import { Router } from 'express';
import indexFundsRouter from './index-funds.route';
import stocksRouter from './stocks.route';

const router = Router();

// Add all sub-routers here
router.use('/index-funds', indexFundsRouter);
router.use('/stocks', stocksRouter);

export default router;
