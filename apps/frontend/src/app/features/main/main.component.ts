import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@finance-tracker/ui';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { EntityType } from '@finance-tracker/models';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterModule, UiHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  logo = 'img/logo-horizontal-light.svg';
  headerMenu: MenuItem[] = [
    {
      id: EntityType.INDEX_FUNDS,
      label: `${EntityType.INDEX_FUNDS}.HEADER_TITLE`,
      icon: PrimeIcons.CHART_LINE,
      routerLink: '/index-funds',
    },
    {
      id: EntityType.STOCKS,
      label: `${EntityType.STOCKS}.HEADER_TITLE`,
      icon: PrimeIcons.BRIEFCASE,
      routerLink: '/stocks',
    },
    {
      id: EntityType.WISHLISTS,
      label: `${EntityType.WISHLISTS}.HEADER_TITLE`,
      icon: PrimeIcons.STAR_FILL,
      routerLink: '/whishlists',
    },
    {
      id: EntityType.NEWS,
      label: `${EntityType.NEWS}.HEADER_TITLE`,
      icon: PrimeIcons.GLOBE,
      routerLink: '/news',
    },
  ];
}
