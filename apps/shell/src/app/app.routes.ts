import { Route } from '@angular/router';
import { authGuard } from '@finance-tracker/data-access';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.routes').then((m) => m.routes),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/signup/signup.routes').then((m) => m.routes),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./features/reset-password/reset-password.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/main/main.routes').then((m) => m.routes),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login' },
];
