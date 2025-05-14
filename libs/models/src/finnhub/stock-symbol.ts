/**
 * StockSymbol
 *
 * @type {string} description Symbol description
 * @type {string} displaySymbol Display symbol name
 * @type {string} symbol Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint.
 * @type {string} type Security type.
 * @type {string} mic Primary exchange's MIC.
 * @type {string} figi FIGI identifier.
 * @type {string} shareClassFIGI Global Share Class FIGI.
 * @type {string} currency Price's currency. This might be different from the reporting currency of fundamental data.
 * @type {string} symbol2 Alternative ticker for exchanges with multiple tickers for 1 stock such as BSE.
 * @type {string} isin ISIN. This field is only available for EU stocks and selected Asian markets. Entitlement from Finnhub is required to access this field.
 */
export interface StockSymbol {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
  mic: string;
  figi: string;
  shareClassFIGI: string | undefined;
  currency: string;
  symbol2: string | undefined;
  isin: string | undefined;
}

export interface StockSymbolRequest {
  exchange: string;
  opts: StockSymbolRequestOpts;
}

interface StockSymbolRequestParam {
  mic: string | undefined;
  securityType: string | undefined;
  currency: string | undefined;
}

export type StockSymbolRequestOpts = StockSymbolRequestParam | undefined;
