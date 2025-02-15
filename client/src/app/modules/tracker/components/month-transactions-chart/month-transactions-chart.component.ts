import {Component, computed, input} from '@angular/core';
import {getMonthTransactionChartConfig} from './month-transactions-chart.config';
import {$dt} from '@primeng/themes';
import {MonthTransactionGroup} from '../../../../core/model/transaction.model';

@Component({
  selector: 'app-month-transactions-chart',
  standalone: false,

  templateUrl: './month-transactions-chart.component.html',
  styleUrl: './month-transactions-chart.component.scss'
})
export class MonthTransactionsChartComponent {
  monthTransactions = input.required<MonthTransactionGroup | undefined>();

  documentStyle = getComputedStyle(document.documentElement);
  textColorSecondary = this.documentStyle.getPropertyValue('--p-text-muted-color');
  surfaceBorder = this.documentStyle.getPropertyValue('--p-content-border-color');

  transactionChartData = computed(() => {
    return getMonthTransactionChartConfig(this.monthTransactions(), $dt('primary.color').value, this.textColorSecondary, this.surfaceBorder);
  });
}
