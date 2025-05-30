import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { TableColumn } from '@finance-tracker/models';

@Component({
  selector: 'lib-ui-table',
  imports: [CommonModule, TranslatePipe, TableModule],
  templateUrl: './ui-table.component.html',
  styleUrl: './ui-table.component.scss',
})
export class UiTableComponent implements OnInit {
  @Input() dataKey: string | undefined;
  @Input() columns: TableColumn[] = [];
  rows = input.required<unknown[]>();
  @Input() sortMode: 'single' | 'multiple' = 'single';
  @Input() rpp = 10;
  @Input() paginator = true;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20];
  @Input() tableStyle: { [k: string]: string } | null = null;
  @Input() size: 'small' | 'large' | undefined = 'large';
  @Input() rowHover = true;

  ngOnInit(): void {
    console.log('TABLE: ', this.columns);
  }
}
