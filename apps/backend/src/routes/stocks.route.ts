import { Router } from 'express';
import StocksController from '../controllers/stocks.controller';

const stocksRouter = Router();
const controller = new StocksController();

/* GET symbols */
stocksRouter.get('/symbols', controller.getSymbols);
/* GET symbols (detailed) */
stocksRouter.get('/symbols/detailed', controller.getSymbolsDetailed);
/* GET quote */
stocksRouter.get('/quote', controller.getQuote);
/* GET stockSymbols */
stocksRouter.get('/stock-symbols', controller.getStockSymbols);
/* GET companyProfile */
stocksRouter.get('/company-profile', controller.getCompanyProfile);

export default stocksRouter;
