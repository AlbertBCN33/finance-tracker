import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageCardComponent } from '@finance-tracker/ui';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, UiPageCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
