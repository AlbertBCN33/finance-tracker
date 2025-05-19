import { Route } from '@angular/router';
import { IndexFundsComponent } from './index-funds.component';

export const routes: Route[] = [
  {
    path: '',
    component: IndexFundsComponent,
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
