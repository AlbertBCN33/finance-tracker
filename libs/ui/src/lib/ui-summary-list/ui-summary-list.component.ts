import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryItem, SummaryItemType } from '@finance-tracker/models';

@Component({
  selector: 'lib-ui-summary-list',
  imports: [CommonModule],
  templateUrl: './ui-summary-list.component.html',
  styleUrl: './ui-summary-list.component.scss',
})
export class UiSummaryListComponent {
  @Input() data: SummaryItem[] = [];
  SummaryItemType = SummaryItemType;
}
