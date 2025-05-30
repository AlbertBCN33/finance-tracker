import {
  ApiErrorResponse,
  CompanyProfile,
  CompanyProfileRequest,
  Quote,
  QuoteRequest,
  StockSymbol,
  StockSymbolRequest,
  SymbolRequest,
  SymbolResponse,
} from '@finance-tracker/models';
import { FinnhubUtils } from '@finance-tracker/utils';
import * as finnhub from 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;

const client = new finnhub.DefaultApi();

/**
 * Symbols
 *
 * @description Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
 * @async
 * @function getSymbols
 * @param {SymbolRequest} request Request parameters
 * @return {Promise<SymbolResponse>}
 */
const getSymbols = async (request: SymbolRequest): Promise<SymbolResponse> => {
  return new Promise((resolve, reject) => {
    console.log(
      `[Finnhub] Fetching symbols for ${request.q || request.exchange}`
    );
    client.symbolSearch(
      request.q,
      request.exchange,
      (error: string, data: SymbolResponse, _response: string) => {
        if (error) {
          console.error(
            `[finnhub] Failed to fetch symbols for ${request.q}:`,
            error
          );
          reject(
            new ApiErrorResponse(
              500,
              'STOCKS',
              'STOCKS.GET_SYMBOLS.ERROR',
              error
            )
          );
        } else {
          console.log(
            `[Finnhub] Successfully fetched symbols for ${request.q}:`,
            data
          );
          if (data.count > 1) {
            resolve(data);
          } else {
            reject(
              new ApiErrorResponse(
                404,
                'STOCKS',
                'STOCKS.GET_SYMBOLS.NOT_FOUND',
                error
              )
            );
          }
        }
      }
    );
  });
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
const getCompanyProfile = async (
  request: CompanyProfileRequest
): Promise<CompanyProfile> => {
  return new Promise((resolve, reject) => {
    console.log(
      `[Finnhub] Fetching company profile for ${
        request.symbol || request.isin || request.cusip
      }`
    );
    client.companyProfile2(
      request,
      (error: string, data: CompanyProfile, _response: string) => {
        if (error) {
          console.error(
            `[finnhub] Failed to fetch company profile for ${
              request.symbol || request.isin || request.cusip
            }:`,
            error
          );
          reject(
            new ApiErrorResponse(
              500,
              'STOCKS',
              'STOCKS.GET_COMPANY_PROFILE.ERROR',
              error
            )
          );
        } else {
          console.log(
            `[Finnhub] Successfully fetched company profile for ${
              request.symbol || request.isin || request.cusip
            }:`,
            data
          );
          if (data) {
            resolve(data);
          } else {
            reject(
              new ApiErrorResponse(
                404,
                'STOCKS',
                'STOCKS.GET_COMPANY_PROFILE.NOT_FOUND',
                error
              )
            );
          }
        }
      }
    );
  });
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
const getQuote = async (request: QuoteRequest): Promise<Quote> => {
  return new Promise((resolve, reject) => {
    console.log(`[Finnhub] Fetching quote for ${request.symbol}`);
    client.quote(
      request.symbol,
      (error: string, data: Quote, _response: string) => {
        if (error) {
          console.error(
            `[finnhub] Failed to fetch quote for ${request.symbol}:`,
            error
          );
          reject(
            new ApiErrorResponse(500, 'STOCKS', 'STOCKS.GET_QUOTE.ERROR', error)
          );
        } else {
          console.log(
            `[Finnhub] Successfully fetched quote for ${request.symbol}:`,
            data,
            FinnhubUtils.validQuote(data)
          );
          if (FinnhubUtils.validQuote(data)) {
            resolve(data);
          } else {
            reject(
              new ApiErrorResponse(
                404,
                'STOCKS',
                'STOCKS.GET_QUOTE.NOT_FOUND',
                error
              )
            );
          }
        }
      }
    );
  });
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
const getStockSymbols = async (
  request: StockSymbolRequest
): Promise<StockSymbol[]> => {
  return new Promise((resolve, reject) => {
    console.log(
      `[Finnhub] Fetching stock symbols for ${
        request.exchange ||
        request.opts.currency ||
        request.opts.mic ||
        request.opts.securityType
      }`
    );
    client.stockSymbols(
      request.exchange,
      request.opts,
      (error: string, data: StockSymbol[], response: string) => {
        if (error) {
          console.error(
            `[finnhub] Failed to fetch stock symbols for ${request.exchange}:`,
            error
          );
          reject(
            new ApiErrorResponse(
              500,
              'STOCKS',
              'STOCKS.GET_STOCK_SYMBOLS.ERROR',
              error
            )
          );
        } else {
          console.log(
            `[Finnhub] Successfully fetched stock symbols for ${request.exchange}:`,
            response,
            data
          );
          resolve(data);
        }
      }
    );
  });
};

export const FinnhubService = {
  getSymbols,
  getCompanyProfile,
  getQuote,
  getStockSymbols,
};
