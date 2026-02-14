import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-dashboard-metrics',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './dashboard-metrics.component.html',
  styleUrl: './dashboard-metrics.component.scss',
})
export class DashboardMetricsComponent {}
