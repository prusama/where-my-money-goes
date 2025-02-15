import {Component, computed, inject, input} from '@angular/core';
import {MONTH_NAMES} from '../../../../core/constants/months.const';
import {TransactionService} from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-month-overview',
  standalone: false,
  templateUrl: './month-overview.component.html',
  styleUrl: './month-overview.component.scss'
})
export class MonthOverviewComponent {
  #transactionService = inject(TransactionService);

  year = input.required<number>();
  month = input.required<number>();

  monthTransactions = computed(() => {
    return this.#transactionService.getMonthTransactions(+this.year(), +this.month())()
  });

  title = computed(() => {
    const month = MONTH_NAMES[this.month()];
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return `${capitalizedMonth} ${this.year()}`;
  });
}
