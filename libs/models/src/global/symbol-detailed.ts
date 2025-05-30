import { CompanyProfile } from '../finnhub/company-profile';
import { Symbol } from '../finnhub/symbol';

export class SymbolDetailed implements Symbol, Partial<CompanyProfile> {
  // Symbol
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;

  // Company profile
  country: string | undefined;
  currency: string | undefined;
  exchange: string | undefined;
  ipo: string | undefined; // Date '1980-12-12';
  marketCapitalization: number | undefined;
  name: string | undefined;
  phone: string | undefined; // Numeric string
  shareOutstanding: number | undefined;
  ticker: string | undefined;
  weburl: string | undefined; // URL
  logo: string | undefined; // URL
  finnhubIndustry: string | undefined;

  constructor(symbol: Symbol, companyProfile: CompanyProfile | undefined) {
    this.description = symbol.description;
    this.displaySymbol = symbol.displaySymbol;
    this.symbol = symbol.symbol;
    this.type = symbol.type;

    this.country = companyProfile?.country;
    this.currency = companyProfile?.currency;
    this.exchange = companyProfile?.exchange;
    this.ipo = companyProfile?.ipo;
    this.marketCapitalization = companyProfile?.marketCapitalization;
    this.name = companyProfile?.name;
    this.phone = companyProfile?.phone;
    this.shareOutstanding = companyProfile?.shareOutstanding;
    this.ticker = companyProfile?.ticker;
    this.weburl = companyProfile?.weburl;
    this.logo = companyProfile?.logo;
    this.finnhubIndustry = companyProfile?.finnhubIndustry;
  }
}
