import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {TransactionRepositoryService} from '../repositories/transaction-repository.service';
import {CurrencyCode, Transaction, TransactionType, YearTransactionGroup} from '../model/transaction.model';
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
}
