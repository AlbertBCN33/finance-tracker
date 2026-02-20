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
          import('../dashboard/dashboard.routes').then((m) => m.routes),
      },
      {
        path: 'institutions',
        loadChildren: () =>
          import('@finance-tracker/institutions/Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'investments',
        loadChildren: () =>
          import('@finance-tracker/investments/Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
];
