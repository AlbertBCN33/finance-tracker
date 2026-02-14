import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-dashboard-insights',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './dashboard-insights.component.html',
  styleUrl: './dashboard-insights.component.scss',
})
export class DashboardInsightsComponent {}
