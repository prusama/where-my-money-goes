import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotFoundPageComponent }
];
