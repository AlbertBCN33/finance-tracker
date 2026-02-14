import { Route } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../features/dashboard/dashboard.routes').then(
            (m) => m.routes || console.error('Error loading dashboard')
          ),
      },
      {
        path: 'holdings',
        loadChildren: () =>
          import('../../features/holdings/holdings.routes').then(
            (m) => m.routes || console.error('Error loading holdings')
          ),
      },
      {
        path: 'index-funds',
        loadChildren: () =>
          import('../../features/index-funds/index-funds.routes').then(
            (m) => m.routes || console.error('Error loading index-funds')
          ),
      },
      {
        path: 'stocks',
        loadChildren: () =>
          import('../../features/stocks/stocks.routes').then(
            (m) => m.routes || console.error('Error loading stocks')
          ),
      },
      {
        path: 'whishlists',
        loadChildren: () =>
          import('../../features/whishlists/whishlists.routes').then(
            (m) => m.routes || console.error('Error loading whishlists')
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('../../features/news/news.routes').then(
            (m) => m.routes || console.error('Error loading news')
          ),
      },
    ],
  },
];
