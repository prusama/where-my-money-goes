import {Component, input} from '@angular/core';
import {YearTransactionGroup} from '../../../../core/model/transaction.model';

@Component({
  selector: 'app-dashboard-balance-overview',
  standalone: false,
  templateUrl: './dashboard-balance-overview.component.html',
  styleUrl: './dashboard-balance-overview.component.scss'
})
export class DashboardBalanceOverviewComponent {
  yearTransactionGroups = input.required<Array<YearTransactionGroup>>();
}
