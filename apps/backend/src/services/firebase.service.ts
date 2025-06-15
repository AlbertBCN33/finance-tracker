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
 * Login: Google
 *
 * @description Login using Google account
 * @async
 * @function loginGoogle
 * @param {LoginGoogleRequest} request Request parameters
 * @return {Promise<LoginGoogleResponse>}
 */
const loginGoogle = async (
  request: LoginGoogleRequest
): Promise<LoginGoogleResponse> => {
  return new Promise((resolve, reject) => {
    console.log(
      `[Finnhub] Fetching symbols for ${request.q || request.exchange}`
    );
    client.symbolSearch(
      request.q,
      request.exchange,
      (error: string, data: LoginGoogleResponse, _response: string) => {
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
 * Login: User
 *
 * @description Login using User + Password
 * @async
 * @function loginUser
 * @param {LoginUserRequest} request Request parameters
 * @return {Promise<LoginUserResponse>}
 */
const loginUser = async (
  request: LoginUserRequest
): Promise<LoginUserResponse> => {
  return new Promise((resolve, reject) => {
    console.log(
      `[Finnhub] Fetching symbols for ${request.q || request.exchange}`
    );
    client.symbolSearch(
      request.q,
      request.exchange,
      (error: string, data: LoginUserResponse, _response: string) => {
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

export const FirebaseService = {
  loginGoogle,
  loginUser,
};
