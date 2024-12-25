import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NotFoundPageComponent} from '../../core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
