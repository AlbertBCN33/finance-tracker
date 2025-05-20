import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-ui-page-card',
  imports: [CommonModule, TranslatePipe, CardModule],
  templateUrl: './ui-page-card.component.html',
  styleUrl: './ui-page-card.component.scss',
})
export class UiPageCardComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
