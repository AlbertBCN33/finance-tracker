import { EntityType } from '@finance-tracker/models';
import { ApiRoutesStocks } from './api-routes-stocks.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiRoutesService {
  [EntityType.STOCKS]: ApiRoutesStocks;

  constructor(private stocksRoutes: ApiRoutesStocks) {
    this[EntityType.STOCKS] = stocksRoutes;
  }
}
