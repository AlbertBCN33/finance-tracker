import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-dashboard-performance',
  imports: [CommonModule, UiCardComponent],
  templateUrl: './dashboard-performance.component.html',
  styleUrl: './dashboard-performance.component.scss',
})
export class DashboardPerformanceComponent {}
