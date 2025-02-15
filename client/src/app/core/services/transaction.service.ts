import {inject, Injectable, Signal, signal} from '@angular/core';
import {TransactionRepositoryService} from '../repositories/transaction-repository.service';
import {MonthTransactionGroup, Transaction, YearTransactionGroup} from '../model/transaction.model';
import {combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  #transactionRepository = inject(TransactionRepositoryService);

  #transactions = signal<Array<Transaction>>([]);
  #yearTransactionGroups = signal<Array<YearTransactionGroup>>([]);

  transactions = this.#transactions.asReadonly();
  yearTransactionGroups = this.#yearTransactionGroups.asReadonly();

  refreshTransactions(): void {
    combineLatest([
      this.#transactionRepository.getAllTransactions(),
      this.#transactionRepository.getTransactionsGroupedByYear()
    ]).subscribe(([allTransaction, yearTransactionGroups]) => {
      this.#transactions.set(allTransaction);
      this.#yearTransactionGroups.set(yearTransactionGroups);
    });
  }

  getMonthTransactions(year: number, month: number): Signal<MonthTransactionGroup|undefined> {
    const monthBalance = this.#yearTransactionGroups()
      ?.find(y => y.year === year)?.months
      ?.find(m => m.month === month);

    if (!monthBalance) {
      return signal(undefined);
    }

    return signal(monthBalance);
  }
}
