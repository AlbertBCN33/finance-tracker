import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'holdings',
    loadChildren: () =>
      import('./features/holdings/holdings.routes').then((m) => m.routes),
  },
];
