import {
  ApiResponse,
  Symbol,
  SymbolDetailed,
  SymbolRequest,
} from '@finance-tracker/models';
import { ApiClientService } from '../api-client/api-client.service';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiRoutesStocks {
  HttpClient = inject(ApiClientService);

  getSymbols = (request: SymbolRequest): Observable<ApiResponse<Symbol[]>> =>
    this.HttpClient.get('stocks/symbols', { q: request.q });
  getSymbolsDetailed = (
    request: SymbolRequest
  ): Observable<ApiResponse<SymbolDetailed[]>> =>
    this.HttpClient.get('stocks/symbols/detailed', { q: request.q });
}
