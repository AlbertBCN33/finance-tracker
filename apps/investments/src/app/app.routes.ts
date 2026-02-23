import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'stocks',
    loadChildren: () =>
      import('./features/stocks/stocks.routes').then((m) => m.routes),
  },
  {
    path: 'index-funds',
    loadChildren: () =>
      import('./features/index-funds/index-funds.routes').then((m) => m.routes),
  },
  {
    path: 'whishlists',
    loadChildren: () =>
      import('./features/whishlists/whishlists.routes').then((m) => m.routes),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./features/news/news.routes').then((m) => m.routes),
  },
];
