import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageCardComponent } from '@finance-tracker/ui';
import { HoldingsSummaryComponent } from './holdings-summary/holdings-summary.component';
import { HoldingsTypesComponent } from './holdings-types/holdings-types.component';
import { HoldingsGeographyComponent } from './holdings-geography/holdings-geography.component';
import { HoldingsSectoralComponent } from './holdings-sectoral/holdings-sectoral.component';

@Component({
  selector: 'app-holdings',
  imports: [
    CommonModule,
    UiPageCardComponent,
    HoldingsSummaryComponent,
    HoldingsTypesComponent,
    HoldingsGeographyComponent,
    HoldingsSectoralComponent,
  ],
  templateUrl: './holdings.component.html',
  styleUrl: './holdings.component.scss',
})
export class HoldingsComponent {}
