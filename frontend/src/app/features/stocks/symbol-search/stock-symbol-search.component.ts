import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRoutesService } from '@finance-tracker/data-access';
import { Subject, takeUntil } from 'rxjs';
import { UiCardComponent, UiInputTextComponent } from '@finance-tracker/ui';
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
  Symbol,
} from '@finance-tracker/models';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-stock-symbol-search',
  imports: [
    CommonModule,
    UiCardComponent,
    TranslatePipe,
    ReactiveFormsModule,
    UiInputTextComponent,
  ],
  templateUrl: './stock-symbol-search.component.html',
  styleUrl: './stock-symbol-search.component.scss',
})
export class StockSymbolSearchComponent implements OnDestroy {
  private unsubscribe = new Subject<void>();
  private fb: FormBuilder = new FormBuilder();

  form: FormGroup = this.fb.group({
    symbol: new FormControl(undefined, [Validators.minLength(1)]),
  });
  leftAddon: FormFieldAddon = {
    type: FormFieldAddonType.ICON,
    icon: 'pi pi-search',
  };
  exactMatch: Symbol | null = null;
  otherMatches: Symbol[] = [];

  constructor(private apiService: ApiRoutesService) {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  submit = (_event: SubmitEvent) => {
    if (this.form.get('symbol')?.value) {
      this.apiService.STOCKS.getSymbols({ q: this.form.get('symbol')!.value })
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((response) => {
          console.log('Repsonse: ', response);
          this.mapData(response);
        });
    }
  };

  mapData = (res: ApiResponse<Symbol[]>) => {
    if (res.success) {
      this.exactMatch =
        res.data.filter(
          (x) => x.symbol === this.form.get('symbol')!.value
        )[0] ?? null;
      this.otherMatches =
        res.data.filter((x) => x.symbol !== this.form.get('symbol')!.value) ??
        null;
    } else {
      this.exactMatch = null;
      this.otherMatches = [];
    }
  };
}
