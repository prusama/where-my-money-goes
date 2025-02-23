import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImportComponent} from './import.component';
import {ImportType} from './enums/import-type.enum';
import {
  ImportSingleTransactionPageComponent
} from './pages/import-single-transaction-page/import-single-transaction-page.component';
import {ImportMonthPageComponent} from './pages/import-month-page/import-month-page.component';
import {ImportYearPageComponent} from './pages/import-year-page/import-year-page.component';

const routes: Routes = [
  {
    path: '',
    component: ImportComponent,
    children: [
      {
        path: ImportType.SINGLE_ENTRY,
        component: ImportSingleTransactionPageComponent
      },
      {
        path: ImportType.MONTH,
        component: ImportMonthPageComponent
      },
      {
        path: ImportType.YEAR,
        component: ImportYearPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
