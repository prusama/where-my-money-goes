import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import {FormsModule} from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButton} from 'primeng/selectbutton';
import {Card} from 'primeng/card';
import { ImportSingleTransactionPageComponent } from './pages/import-single-transaction-page/import-single-transaction-page.component';
import { ImportComponent } from './import.component';
import { ImportMonthPageComponent } from './pages/import-month-page/import-month-page.component';
import { ImportYearPageComponent } from './pages/import-year-page/import-year-page.component';


@NgModule({
  declarations: [
    ImportSingleTransactionPageComponent,
    ImportComponent,
    ImportMonthPageComponent,
    ImportYearPageComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    FormsModule,
    ToggleButtonModule,
    SelectButton,
    Card
  ]
})
export class ImportModule { }
