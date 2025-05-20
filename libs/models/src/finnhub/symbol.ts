/**
 * Symbol
 */
export interface Symbol {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

/**
 * SymbolRequest
 * @type {string} q Query text can be symbol, name, isin, or cusip.
 * @type {string} exchange (Optional) Exchange limit.
 */
export interface SymbolRequest {
  q: string;
  exchange?: string;
}

/**
 * SymbolResponse
 * @type {number} count Number of results.
 * @type {Symbol[]} result Array of search results.
 */
export interface SymbolResponse {
  count: number;
  result: Symbol[];
}
