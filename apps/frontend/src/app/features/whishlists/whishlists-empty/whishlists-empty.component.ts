import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-whishlists-empty',
  imports: [CommonModule, TranslatePipe, CardModule, ButtonModule],
  templateUrl: './whishlists-empty.component.html',
  styleUrl: './whishlists-empty.component.scss',
})
export class WhishlistsEmptyComponent {
  iconEmpty = 'img/whishlists-empty.svg';
  create = () => {
    console.log('Creating wishlist');
  };
}
