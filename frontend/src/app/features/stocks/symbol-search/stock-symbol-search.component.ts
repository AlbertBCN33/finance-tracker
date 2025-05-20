import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRoutesService } from '@finance-tracker/data-access';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stock-symbol-search',
  imports: [CommonModule],
  templateUrl: './stock-symbol-search.component.html',
  styleUrl: './stock-symbol-search.component.scss',
})
export class StockSymbolSearchComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(private apiService: ApiRoutesService) {}

  ngOnInit(): void {
    console.log('Stock symbol search');
    this.apiService.STOCKS.getSymbols({ q: 'APPL' })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response) => {
        console.log('Repsonse: ', response);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
