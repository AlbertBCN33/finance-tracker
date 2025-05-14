import {
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
} from '@finance-tracker/models';
import { FinnhubService } from './finnhub.service';

class StocksService {
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
