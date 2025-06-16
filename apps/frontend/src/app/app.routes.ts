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
  },
  {
    path: 'test',
    component: NxWelcomeComponent,
  },
  { path: '**', redirectTo: 'login' },
];
