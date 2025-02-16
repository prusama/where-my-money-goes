import {Component, inject} from '@angular/core';
import {TransactionService} from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  #transactionService = inject(TransactionService);
  yearTransactionGroups = this.#transactionService.yearTransactionGroups;
}
