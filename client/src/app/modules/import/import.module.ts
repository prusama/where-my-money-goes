import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import { ImportPageComponent } from './pages/import-page/import-page.component';


@NgModule({
  declarations: [
    ImportPageComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule
  ]
})
export class ImportModule { }
