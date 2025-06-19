import { EntityType } from '@finance-tracker/models';
import { ApiRoutesStocks } from './api-routes-stocks.service';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiRoutesService {
  [EntityType.STOCKS] = inject(ApiRoutesStocks);
}
