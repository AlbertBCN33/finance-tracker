import { Request, Response, NextFunction } from 'express';
import StocksService from '../services/stocks.service';
import {
  ApiResponse,
  CompanyProfile,
  CompanyProfileRequest,
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
  Symbol,
  SymbolDetailed,
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
   * Symbols (detailed)
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbol
   */
  getSymbolsDetailed = async (
    req: Request<unknown, unknown, unknown, SymbolRequest>,
    res: Response<ApiResponse<SymbolDetailed[]>>,
    next: NextFunction
  ) => {
    try {
      const { q, exchange } = req.query;
      const data = await this.service.getSymbolsDetailed({ q, exchange });
      return res.json({
        success: true,
        name: 'STOCKS',
        message: 'STOCKS.GET_SYMBOLS_DETAILED.SUCCESS',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Symbols
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbol
   */
  getCompanyProfile = async (
    req: Request<unknown, unknown, unknown, CompanyProfileRequest>,
    res: Response<ApiResponse<CompanyProfile>>,
    next: NextFunction
  ) => {
    try {
      const { symbol, isin, cusip } = req.query;
      const data = await this.service.getCompanyProfile({
        symbol,
        isin,
        cusip,
      });
      return res.json({
        success: true,
        name: 'STOCKS',
        message: 'STOCKS.GET_COMPANY_PROFILE.SUCCESS',
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
