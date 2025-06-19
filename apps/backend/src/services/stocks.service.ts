import {
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
   * Symbols (detailed)
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbolsDetailed
   * @param {SymbolRequest} request Request parameters
   * @return {Promise<SymbolDetailed[]>}
   */
  getSymbolsDetailed = async (
    request: SymbolRequest
  ): Promise<SymbolDetailed[]> => {
    const result: SymbolDetailed[] = [];
    // Get matching symbols
    const res = await FinnhubService.getSymbols(request);
    if (res?.count > 0) {
      /**
       * For every symbol get the compnay details
       * Note: The API doesn't allow to retrieve a list of company details based on a symbol. That's why we have to make a query for every matched symbol.
       */
      for (let i = 0; i < res.result.length; i++) {
        await this.getCompanyProfile({
          symbol: res.result[i].symbol,
        })
          .then((response) =>
            result.push(new SymbolDetailed(res.result[i], response))
          )
          .catch((err) => {
            result.push(new SymbolDetailed(res.result[i], undefined));
          });
      }
      return result;
    }
    return null;
  };

  /**
   * Company profile
   *
   * @description Get general information of a company. You can query by symbol, ISIN or CUSIP. This is the free version.
   * @async
   * @function getCompanyProfile
   * @param {CompanyProfileRequest} request Request parameters
   * @return {Promise<CompanyProfile>}
   */
  getCompanyProfile = async (
    request: CompanyProfileRequest
  ): Promise<CompanyProfile> => {
    const res = await FinnhubService.getCompanyProfile(request);
    return res;
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
