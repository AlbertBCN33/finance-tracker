import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryItem, SummaryItemType } from '@finance-tracker/models';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-summary-list',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './ui-summary-list.component.html',
  styleUrl: './ui-summary-list.component.scss',
})
export class UiSummaryListComponent {
  @Input() data: SummaryItem[] = [];
  SummaryItemType = SummaryItemType;
}
