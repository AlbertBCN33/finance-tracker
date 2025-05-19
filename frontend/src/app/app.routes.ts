import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'index-funds',
    loadChildren: () =>
      import('./features/index-funds/index-funds.routes').then(
        (m) => m.routes || console.error('Error loading index-funds')
      ),
  },
  {
    path: 'stocks',
    loadChildren: () =>
      import('./features/stocks/stocks.routes').then(
        (m) => m.routes || console.error('Error loading stocks')
      ),
  },
  {
    path: 'whishlists',
    loadChildren: () =>
      import('./features/whishlists/whishlists.routes').then(
        (m) => m.routes || console.error('Error loading whishlists')
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./features/news/news.routes').then(
        (m) => m.routes || console.error('Error loading news')
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
