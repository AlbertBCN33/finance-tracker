import { Route } from '@angular/router';
import { StocksComponent } from './stocks.component';

export const routes: Route[] = [
  {
    path: '',
    component: StocksComponent,
    // children: [
    //   { path: '', redirectTo: 'system-design', pathMatch: 'full' },
    //   {
    //     path: 'system-design',
    //     component: SystemDesignComponent,
    //   },
    //   {
    //     path: 'architecture-diagram',
    //     component: ArchitectureDiagramComponent,
    //   },
    // ],
  },
];
