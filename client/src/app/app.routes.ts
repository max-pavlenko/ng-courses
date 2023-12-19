import {Routes} from '@angular/router';

export const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: '/courses'},
   {path: 'courses', loadComponent: () => import('./courses/containers/courses-page/courses-page.component')},
   {path: 'courses/:id', loadComponent: () => import('./courses/containers/course-page/course-page.component')},
   {path: '**', redirectTo: '/', pathMatch: 'full'},
];
