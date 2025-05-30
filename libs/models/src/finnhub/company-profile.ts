export interface CompanyProfile {
  country: string;
  currency: string;
  exchange: string;
  ipo: string; // Date '1980-12-12';
  marketCapitalization: number;
  name: string;
  phone: string; // Numeric string
  shareOutstanding: number;
  ticker: string;
  weburl: string; // URL
  logo: string; // URL
  finnhubIndustry: string;
}

/**
 * CompanyProfile Request
 * @type {string} symbol (Optional) Symbol of the company: AAPL e.g.
 * @type {string} isin (Optional)  ISIN
 * @type {string} cusip (Optional)  CUSIP
 */
export interface CompanyProfileRequest {
  symbol?: string;
  isin?: string;
  cusip?: string;
}
