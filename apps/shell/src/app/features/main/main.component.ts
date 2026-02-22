import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@finance-tracker/ui';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { EntityType } from '@finance-tracker/models';

@Component({
  selector: 'shell-main',
  imports: [RouterModule, UiHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  logo = 'img/logo-horizontal-light.svg';
  headerMenu: MenuItem[] = [
    {
      id: 'dashboard',
      label: `DASHBOARD.HEADER_TITLE`,
      icon: PrimeIcons.HOME,
      routerLink: '/dashboard',
    },
    {
      id: 'holdings',
      label: `HOLDINGS.HEADER_TITLE`,
      icon: PrimeIcons.MONEY_BILL,
      routerLink: '/institutions/holdings',
    },
    {
      id: EntityType.INDEX_FUNDS,
      label: `${EntityType.INDEX_FUNDS}.HEADER_TITLE`,
      icon: PrimeIcons.CHART_LINE,
      routerLink: '/investments/index-funds',
    },
    {
      id: EntityType.STOCKS,
      label: `${EntityType.STOCKS}.HEADER_TITLE`,
      icon: PrimeIcons.BRIEFCASE,
      routerLink: '/investments/stocks',
    },
    {
      id: EntityType.WISHLISTS,
      label: `${EntityType.WISHLISTS}.HEADER_TITLE`,
      icon: PrimeIcons.STAR_FILL,
      routerLink: '/investments/whishlists',
    },
    {
      id: EntityType.NEWS,
      label: `${EntityType.NEWS}.HEADER_TITLE`,
      icon: PrimeIcons.GLOBE,
      routerLink: '/investments/news',
    },
  ];
}
