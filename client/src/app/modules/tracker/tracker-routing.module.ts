import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {NotFoundPageComponent} from '../../core/pages/not-found-page/not-found-page.component';
import {MonthOverviewComponent} from './pages/month-overview/month-overview.component';
import {TrackerComponent} from './tracker.component';

const routes: Routes = [
  {
    path: '',
    component: TrackerComponent,
    children: [
      { path: '', component: DashboardPageComponent, pathMatch: 'full' },
      { path: 'year/:year/month/:month', component: MonthOverviewComponent },
      { path: '**', component: NotFoundPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
