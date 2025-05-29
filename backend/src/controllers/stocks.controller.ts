import { Request, Response, NextFunction } from 'express';
import StocksService from '../services/stocks.service';
import {
  ApiResponse,
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
  Symbol,
  SymbolRequest,
} from '@finance-tracker/models';

class StocksController {
  service = new StocksService();

  /**
   * Symbols
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbol
   */
  getSymbols = async (
    req: Request<unknown, unknown, unknown, SymbolRequest>,
    res: Response<ApiResponse<Symbol[]>>,
    next: NextFunction
  ) => {
    try {
      const { q, exchange } = req.query;
      const data = await this.service.getSymbols({ q, exchange });
      return res.json({
        success: true,
        name: 'STOCKS',
        message: 'STOCKS.GET_SYMBOLS.SUCCESS',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

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
