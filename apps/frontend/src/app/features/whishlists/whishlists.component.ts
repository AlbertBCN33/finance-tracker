import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageCardComponent } from '@finance-tracker/ui';
import { WhishlistsEmptyComponent } from './whishlists-empty/whishlists-empty.component';

@Component({
  selector: 'app-whishlists',
  imports: [CommonModule, UiPageCardComponent, WhishlistsEmptyComponent],
  templateUrl: './whishlists.component.html',
  styleUrl: './whishlists.component.scss',
})
export class WhishlistsComponent {}
