import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-holdings-sectoral',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './holdings-sectoral.component.html',
  styleUrl: './holdings-sectoral.component.scss',
})
export class HoldingsSectoralComponent {}
