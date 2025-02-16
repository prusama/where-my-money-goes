import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TransactionService} from '../../core/services/transaction.service';

@Component({
  selector: 'app-tracker',
  imports: [
    RouterOutlet
  ],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent implements OnInit {
  #transactionService = inject(TransactionService);

  ngOnInit() {
    this.#transactionService.refreshTransactions();
  }
}
