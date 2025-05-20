import {
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
  Symbol,
  SymbolRequest,
} from '@finance-tracker/models';
import { FinnhubService } from './finnhub.service';

class StocksService {
  /**
   * Symbols
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbols
   * @param {SymbolRequest} request Request parameters
   * @return {Promise<Symbol[]>}
   */
  getSymbols = async (request: SymbolRequest): Promise<Symbol[]> => {
    const res = await FinnhubService.getSymbols(request);
    return res.result;
  };

  /**
   * Quote
   *
   * @description Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time updates.
   * @async
   * @function getQuote
   * @param {QuoteRequest} request Request parameters
   * @return {Promise<Quote>}
   */
  getQuote = async (request: QuoteRequest): Promise<Quote> => {
    const res = await FinnhubService.getQuote(request);
    return res;
  };

  /**
   * StockSymbols
   *
   * @description List supported stocks. We use the following symbology to identify stocks on Finnhub.
   * @async
   * @function getStockSymbols
   * @param {StockSymbolRequest} request Request parameters
   * @return {Promise<StockSymbol[]>}
   */
  getStockSymbols = async (
    request: StockSymbolRequest
  ): Promise<StockSymbol[]> => {
    const res = await FinnhubService.getStockSymbols(request);
    return res;
  };
}

export default StocksService;
