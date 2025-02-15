import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {MONTH_NAMES} from '../../../../core/constants/months.const';
import {$dt} from '@primeng/themes';
import {ChartData, ChartOptions} from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {getMonthListChartConfiguration} from './month-list-chart.config';
import {MonthTransactionGroup, YearTransactionGroup} from '../../../../core/model/transaction.model';

interface MonthsGridItem extends MonthTransactionGroup {
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
  yearTransactionGroup: InputSignal<YearTransactionGroup> = input.required();
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
    return this.yearTransactionGroup()?.months?.map((month) => {
      const {chartData, chartOptions} = getMonthListChartConfiguration(month, $dt('primary.color').value, this.textColorSecondary, this.surfaceBorder);

      return {
        ...month,
        chartData,
        chartOptions
      }
    })
  });

  goToMonthOverview(monthBalance: MonthTransactionGroup): void {
    this.router.navigate(['year', monthBalance.year, 'month', monthBalance.month], {
      relativeTo: this.activatedRoute
    });
  }
}
