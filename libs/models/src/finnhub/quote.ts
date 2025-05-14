/**
 * Quote
 * @type {number} o Open price of the day
 * @type {number} h High price of the day
 * @type {number} l Low price of the day
 * @type {number} c Current price
 * @type {number} pc Previous close price
 * @type {number} d Change
 * @type {number} dp Percent change
 */
export interface Quote {
  o: number;
  h: number;
  l: number;
  c: number;
  pc: number;
  d: number;
  dp: number;
}

export interface QuoteRequest {
  symbol: string;
}
