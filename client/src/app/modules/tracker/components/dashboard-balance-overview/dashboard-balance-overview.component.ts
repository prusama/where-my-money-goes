import {Component, inject, Signal} from '@angular/core';
import {BalancesStore} from '../../../../core/store/balances.store';
import {YearBalance} from '../../../../core/model/year-balance.model';

@Component({
  selector: 'app-dashboard-balance-overview',
  standalone: false,
  templateUrl: './dashboard-balance-overview.component.html',
  styleUrl: './dashboard-balance-overview.component.scss'
})
export class DashboardBalanceOverviewComponent {
  balancesStore = inject(BalancesStore);
  balancesGroupedByYears: Signal<Array<YearBalance>> = this.balancesStore.yearBalances;
}
