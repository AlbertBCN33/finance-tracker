import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent, UiCardCustomHeadDirective } from '@finance-tracker/ui';

@Component({
  selector: 'app-dashboard-metrics',
  imports: [CommonModule, UiCardComponent, UiCardCustomHeadDirective],
  templateUrl: './dashboard-metrics.component.html',
  styleUrl: './dashboard-metrics.component.scss',
})
export class DashboardMetricsComponent {}
