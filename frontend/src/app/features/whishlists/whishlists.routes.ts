import { Route } from '@angular/router';
import { WhishlistsComponent } from './whishlists.component';

export const routes: Route[] = [
  {
    path: '',
    component: WhishlistsComponent,
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
