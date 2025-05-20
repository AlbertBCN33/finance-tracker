import { Router } from 'express';
import StocksController from '../controllers/stocks.controller';

const stocksRouter = Router();
const controller = new StocksController();

/* GET symbols */
stocksRouter.get('/symbols', controller.getSymbols);
/* GET quote */
stocksRouter.get('/quote', controller.getQuote);
/* GET stockSymbols */
stocksRouter.get('/stock-symbols', controller.getStockSymbols);

export default stocksRouter;
