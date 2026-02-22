import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-holdings-summary',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './holdings-summary.component.html',
  styleUrl: './holdings-summary.component.scss',
})
export class HoldingsSummaryComponent {}
