import { Request, Response, NextFunction } from 'express';
import StocksService from '../services/stocks.service';
import {
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
} from '@finance-tracker/models';
import { ApiResponse } from '../models/api-response';

class StocksController {
  service = new StocksService();

  /**
   * Quote
   *
   * @description Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time updates.
   * @async
   * @function getQuote
   */
  getQuote = async (
    req: Request<unknown, unknown, unknown, QuoteRequest>,
    res: Response<ApiResponse<Quote>>,
    next: NextFunction
  ) => {
    try {
      const { symbol } = req.query;
      const data = await this.service.getQuote({ symbol });
      return res.json({
        success: true,
        name: 'STOCKS',
        message: 'STOCKS.GET_QUOTE.SUCCESS',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * StockSymbols
   *
   * @description List supported stocks. We use the following symbology to identify stocks on Finnhub.
   * @async
   * @function getStockSymbols
   */
  getStockSymbols = async (
    req: Request<StockSymbolRequest>,
    res: Response<ApiResponse<StockSymbol[]>>,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.getStockSymbols(req.params);
      return res.json({
        success: true,
        name: 'STOCKS',
        message: 'STOCKS.GET_STOCK_SYMBOLS.SUCCESS',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default StocksController;
