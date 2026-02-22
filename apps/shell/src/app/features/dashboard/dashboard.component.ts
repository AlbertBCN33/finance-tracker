import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageCardComponent } from '@finance-tracker/ui';
import { DashboardMetricsComponent } from './dashboard-metrics/dashboard-metrics.component';
import { DashboardInsightsComponent } from './dashboard-insights/dashboard-insights.component';
import { DashboardPerformanceComponent } from './dashboard-performance/dashboard-performance.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    UiPageCardComponent,
    DashboardMetricsComponent,
    DashboardInsightsComponent,
    DashboardPerformanceComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
