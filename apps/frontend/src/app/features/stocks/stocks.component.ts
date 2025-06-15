import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageCardComponent } from '@finance-tracker/ui';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockSymbolSearchComponent } from './symbol-search/stock-symbol-search.component';

@Component({
  selector: 'app-stocks',
  imports: [
    CommonModule,
    UiPageCardComponent,
    StockSymbolSearchComponent,
    StockListComponent,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss',
})
export class StocksComponent {}
