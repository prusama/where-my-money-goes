import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/pages/not-found-page/not-found-page.component';
import {isAuthenticatedGuard} from './core/guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tracker'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'tracker',
    loadChildren: () => import('./modules/tracker/tracker.module').then(m => m.TrackerModule),
    canMatch: [isAuthenticatedGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
