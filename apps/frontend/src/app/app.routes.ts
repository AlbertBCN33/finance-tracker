import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginComponent } from './features/login/login.component';
import { authGuard } from '@finance-tracker/data-access';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.routes').then(
        (m) => m.routes || console.error('Error loading login')
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/main/main.routes').then(
        (m) => m.routes || console.error('Error loading main')
      ),
    canActivate: [authGuard],
    children: [
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
    ],
  },
  {
    path: 'test',
    component: NxWelcomeComponent,
  },
  { path: '**', redirectTo: 'login' },
];
