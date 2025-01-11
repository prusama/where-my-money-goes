import {Component, input} from '@angular/core';
import {Transaction, TransactionType} from '../../../../core/model/transaction.model';

@Component({
  selector: 'app-transactions-list',
  standalone: false,

  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})
export class TransactionsListComponent {
  TransactionTypes = TransactionType;

  transactions = input.required<Array<Transaction>>();
}
