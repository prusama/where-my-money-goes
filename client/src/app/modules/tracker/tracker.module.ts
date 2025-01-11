import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {MonthListComponent} from './components/month-list/month-list.component';
import { DashboardBalanceOverviewComponent } from './components/dashboard-balance-overview/dashboard-balance-overview.component';
import {TableModule} from 'primeng/table';
import {UIChart} from 'primeng/chart';
import { MonthOverviewComponent } from './pages/month-overview/month-overview.component';
import {Card} from 'primeng/card';
import {Panel} from 'primeng/panel';
import { MonthTransactionsChartComponent } from './components/month-transactions-chart/month-transactions-chart.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    MonthListComponent,
    DashboardBalanceOverviewComponent,
    MonthOverviewComponent,
    MonthTransactionsChartComponent,
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    TableModule,
    UIChart,
    Card,
    Panel
  ]
})
export class TrackerModule { }
