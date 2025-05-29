import { Component, OnDestroy, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-stock-symbol-search',
  imports: [
    CommonModule,
    UiCardComponent,
    ReactiveFormsModule,
    UiInputTextComponent,
  ],
  templateUrl: './stock-symbol-search.component.html',
  styleUrl: './stock-symbol-search.component.scss',
})
export class StockSymbolSearchComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  fb: FormBuilder = new FormBuilder();
  form: FormGroup = this.fb.group({
    symbol: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private apiService: ApiRoutesService) {}

  ngOnInit(): void {
    console.log('Stock symbol search');
    this.apiService.STOCKS.getSymbols({ q: 'APPL' })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response) => {
        console.log('Repsonse: ', response);
      });

    this.form.valueChanges.subscribe((val) => {
      console.log('Value changes: ', val, this.form, this.form.get('symbol'));
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
