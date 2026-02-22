import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-holdings-geography',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './holdings-geography.component.html',
  styleUrl: './holdings-geography.component.scss',
})
export class HoldingsGeographyComponent {}
