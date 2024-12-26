import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {Card} from 'primeng/card';
import {InputText} from 'primeng/inputtext';
import {Password, PasswordDirective} from 'primeng/password';
import {Checkbox} from 'primeng/checkbox';
import {Button} from 'primeng/button';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    Card,
    InputText,
    PasswordDirective,
    Password,
    Checkbox,
    Button
  ]
})
export class AuthModule { }
