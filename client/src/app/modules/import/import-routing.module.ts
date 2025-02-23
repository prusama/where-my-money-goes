import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImportPageComponent} from './pages/import-page/import-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ImportPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
