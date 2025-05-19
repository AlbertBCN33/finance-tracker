import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-card',
  imports: [CommonModule, CardModule, TranslatePipe],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
})
export class UiCardComponent {
  title = input<string>('');
  text = input<string>('');
}
