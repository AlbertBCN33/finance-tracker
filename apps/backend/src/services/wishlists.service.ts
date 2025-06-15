import { Symbol, SymbolRequest } from '@finance-tracker/models';
import { FinnhubService } from './finnhub.service';

class WishlistsService {
  /**
   * Symbols
   *
   * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * @async
   * @function getSymbols
   * @param {SymbolRequest} request Request parameters
   * @return {Promise<Symbol[]>}
   */
  getAll = async (request: SymbolRequest): Promise<Symbol[]> => {
    const res = await FinnhubService.getSymbols(request);
    return res.result;
  };
}

export default WishlistsService;
