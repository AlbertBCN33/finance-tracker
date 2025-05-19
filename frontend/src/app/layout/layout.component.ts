import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@finance-tracker/ui';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { EntityType } from '@finance-tracker/models';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, UiHeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponentComponent {
  logo = 'img/logo-horizontal-light.svg';
  headerMenu: MenuItem[] = [
    {
      id: EntityType.INDEX_FUNDS,
      label: `${EntityType.INDEX_FUNDS}.TITLE_HEADER`,
      icon: PrimeIcons.CHART_LINE,
      routerLink: '/index-funds',
    },
    {
      id: EntityType.STOCKS,
      label: `${EntityType.STOCKS}.TITLE_HEADER`,
      icon: PrimeIcons.BRIEFCASE,
      routerLink: '/stocks',
    },
    {
      id: EntityType.WISHLISTS,
      label: `${EntityType.WISHLISTS}.TITLE_HEADER`,
      icon: PrimeIcons.STAR_FILL,
      routerLink: '/whishlists',
    },
    {
      id: EntityType.NEWS,
      label: `${EntityType.NEWS}.TITLE_HEADER`,
      icon: PrimeIcons.GLOBE,
      routerLink: '/news',
    },
  ];
}
