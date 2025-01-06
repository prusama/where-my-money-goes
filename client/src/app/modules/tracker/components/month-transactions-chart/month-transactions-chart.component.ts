import {Component, computed, input} from '@angular/core';
import {MonthBalance} from '../../../../core/model/month-balance.model';
import {getMonthTransactionChartConfig} from './month-transactions-chart.config';
import {$dt} from '@primeng/themes';

@Component({
  selector: 'app-month-transactions-chart',
  standalone: false,

  templateUrl: './month-transactions-chart.component.html',
  styleUrl: './month-transactions-chart.component.scss'
})
export class MonthTransactionsChartComponent {
  monthBalance = input.required<MonthBalance | undefined>();

  documentStyle = getComputedStyle(document.documentElement);
  textColorSecondary = this.documentStyle.getPropertyValue('--p-text-muted-color');
  surfaceBorder = this.documentStyle.getPropertyValue('--p-content-border-color');

  transactionChartData = computed(() => {
    return getMonthTransactionChartConfig(this.monthBalance(), $dt('primary.color').value, this.textColorSecondary, this.surfaceBorder);
  });
}
