import {Component, computed, inject, input} from '@angular/core';
import {BalancesStore} from '../../../../core/store/balances.store';
import {MONTH_NAMES} from '../../../../core/constants/months.const';

@Component({
  selector: 'app-month-overview',
  standalone: false,
  templateUrl: './month-overview.component.html',
  styleUrl: './month-overview.component.scss'
})
export class MonthOverviewComponent {
  balancesStore = inject(BalancesStore);

  year = input.required<number>();
  month = input.required<number>();

  monthBalance = computed(() => {
    return this.balancesStore.getMonthBalance(+this.year(), +this.month())()
  });

  transactions = computed(() => {
    return this.monthBalance()?.transactions ?? [];
  });

  title = computed(() => {
    const month = MONTH_NAMES[this.month()];
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return `${capitalizedMonth} ${this.year()}`;
  });
}
