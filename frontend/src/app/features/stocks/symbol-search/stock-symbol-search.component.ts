import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ApiRoutesService } from '@finance-tracker/data-access';
import {
  UiCardComponent,
  UiInputTextComponent,
  UiSummaryListComponent,
  UiTableComponent,
} from '@finance-tracker/ui';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ApiResponse,
  FormFieldAddon,
  FormFieldAddonType,
  SummaryItem,
  SummaryItemType,
  SymbolDetailed,
  TableColumn,
} from '@finance-tracker/models';
import { TranslatePipe } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-stock-symbol-search',
  imports: [
    CommonModule,
    UiCardComponent,
    TranslatePipe,
    ReactiveFormsModule,
    UiInputTextComponent,
    UiTableComponent,
    PanelModule,
    UiSummaryListComponent,
  ],
  templateUrl: './stock-symbol-search.component.html',
  styleUrl: './stock-symbol-search.component.scss',
})
export class StockSymbolSearchComponent implements OnDestroy {
  private unsubscribe = new Subject<void>();
  private fb: FormBuilder = new FormBuilder();

  // Search: form
  form: FormGroup = this.fb.group({
    symbol: new FormControl(undefined, [Validators.minLength(1)]),
  });

  // Search: input icon
  leftAddon: FormFieldAddon = {
    type: FormFieldAddonType.ICON,
    icon: 'pi pi-search',
  };

  // Results
  exactMatchSummary: SummaryItem[] = [];
  exactMatch: SymbolDetailed | null = null;
  otherMatches: SymbolDetailed[] = [];

  // Table
  dataKey = 'symbol';
  columns: TableColumn[] = [
    {
      id: 'description',
      label: 'STOCKS.SYMBOL_SEARCH.BEST_MATCHES.description',
      isSortable: true,
    },
    {
      id: 'symbol',
      label: 'STOCKS.SYMBOL_SEARCH.BEST_MATCHES.symbol',
      isSortable: true,
    },
    {
      id: 'displaySymbol',
      label: 'STOCKS.SYMBOL_SEARCH.BEST_MATCHES.displaySymbol',
      isSortable: true,
    },
    {
      id: 'type',
      label: 'STOCKS.SYMBOL_SEARCH.BEST_MATCHES.type',
      isSortable: true,
    },
  ];

  constructor(private apiService: ApiRoutesService) {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  submit = (_event: SubmitEvent) => {
    if (this.form.get('symbol')?.value) {
      this.apiService.STOCKS.getSymbolsDetailed({
        q: this.form.get('symbol')!.value,
      })
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((response) => {
          console.log('Repsonse: ', response);
          this.mapData(response);
        });
    }
  };

  mapData = (res: ApiResponse<SymbolDetailed[]>) => {
    if (res.success) {
      this.exactMatch =
        res.data.filter(
          (x) => x.symbol === this.form.get('symbol')!.value
        )[0] ?? null;

      this.exactMatchSummary = this.exactMatch
        ? [
            {
              type: SummaryItemType.TEXT,
              value: this.exactMatch.description,
              label: 'Desc',
            },
            {
              type: SummaryItemType.TEXT,
              value: this.exactMatch.symbol,
              label: 'Symbol',
            },
            {
              type: SummaryItemType.TEXT,
              value: this.exactMatch.type,
              label: 'Type',
            },
          ]
        : [];
      this.otherMatches =
        res.data.filter((x) => x.symbol !== this.form.get('symbol')!.value) ??
        null;
    } else {
      this.exactMatch = null;
      this.otherMatches = [];
    }
  };
}
