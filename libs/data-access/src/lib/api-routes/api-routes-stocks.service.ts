import { SymbolRequest } from '@finance-tracker/models';
import { ApiClientService } from '../api-client/api-client.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiRoutesStocks {
  constructor(private readonly HttpClient: ApiClientService) {}

  getSymbols = (request: SymbolRequest) =>
    this.HttpClient.get('stocks/symbols', { q: request.q });
}
