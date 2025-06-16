import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-message',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './ui-message.component.html',
  styleUrl: './ui-message.component.scss',
})
export class UiMessageComponent {
  @Input() message: string | null = null;
  @Input() severity: 'info' | 'sucess' | 'error' | null = null;
}
