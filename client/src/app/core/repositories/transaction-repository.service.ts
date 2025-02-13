import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction, YearTransactionGroup} from '../model/transaction.model';

const TRANSACTIONS_URL = 'https://localhost:7005/api/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionRepositoryService {
  #http = inject(HttpClient);

  getAllTransactions(): Observable<Array<Transaction>> {
    return this.#http.get<Array<Transaction>>(TRANSACTIONS_URL);
  }

  getTransactionsGroupedByYear(): Observable<Array<YearTransactionGroup>> {
    return this.#http.get<Array<YearTransactionGroup>>(`${TRANSACTIONS_URL}/groupedByYear`);
  }
}
