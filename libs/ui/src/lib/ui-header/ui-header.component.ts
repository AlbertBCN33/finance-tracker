import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-header',
  imports: [CommonModule, RouterModule, TranslatePipe, MenubarModule],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.scss',
})
export class UiHeaderComponent {
  logoSrc = input<string>();
  list = input.required<MenuItem[]>();
}
