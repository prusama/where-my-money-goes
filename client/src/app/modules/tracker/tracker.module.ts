import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {MonthListComponent} from './components/month-list/month-list.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    MonthListComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ]
})
export class TrackerModule { }
