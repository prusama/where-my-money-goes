import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {YearBalance} from '../../../../core/model/year-balance.model';
import {MONTH_NAMES} from '../../../../core/constants/months.const';
import {MonthBalance} from '../../../../core/model/month-balance.model';
import {$dt} from '@primeng/themes';
import {ChartData, ChartOptions} from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {getMonthListConfiguration} from './month-list-chart.config';

interface MonthsGridItem extends MonthBalance {
  chartData: ChartData;
  chartOptions: ChartOptions;
}

@Component({
  selector: 'app-month-list',
  standalone: false,
  templateUrl: './month-list.component.html',
  styleUrl: './month-list.component.scss'
})
export class MonthListComponent {
  yearBalance: InputSignal<YearBalance> = input.required();
  monthNames = MONTH_NAMES;
  documentStyle = getComputedStyle(document.documentElement);
  textColorSecondary = this.documentStyle.getPropertyValue('--p-text-muted-color');
  surfaceBorder = this.documentStyle.getPropertyValue('--p-content-border-color');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  monthsGrid: Signal<Array<MonthsGridItem>> = computed(() => {
    return this.yearBalance()?.months?.map((month) => {
      const {chartData, chartOptions} = getMonthListConfiguration(month, $dt('primary.color').value, this.textColorSecondary, this.surfaceBorder);

      return {
        ...month,
        chartData,
        chartOptions
      }
    })
  });

  goToMonthOverview(monthBalance: MonthBalance): void {
    this.router.navigate(['year', monthBalance.year, 'month', monthBalance.month], {
      relativeTo: this.activatedRoute
    });
  }
}
