import { Route } from '@angular/router';
import { NewsComponent } from './news.component';

export const routes: Route[] = [
  {
    path: '',
    component: NewsComponent,
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
