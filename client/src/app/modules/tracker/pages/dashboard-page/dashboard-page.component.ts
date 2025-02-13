import {Component, effect, inject, OnInit} from '@angular/core';
import {BalancesStore} from '../../../../core/store/balances.store';
import {TransactionService} from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  balancesStore = inject(BalancesStore);
  #transactionService = inject(TransactionService);

  constructor(

  ) {
    effect(() => {
      console.log(this.#transactionService.transactions());
    });

    this.#transactionService.refreshTransactions();
  }
}
