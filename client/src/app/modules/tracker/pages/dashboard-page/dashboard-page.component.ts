import {Component, inject, OnInit} from '@angular/core';
import {BalancesStore} from '../../../../core/store/balances.store';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  balancesStore = inject(BalancesStore);

  ngOnInit() {
    /*console.log(this.balancesStore.loading());
    console.log(this.balancesStore.entities);
    this.balancesStore.loadYears();
    console.log(this.balancesStore.loading());
    console.log(this.balancesStore.entities());*/
    console.log(this.balancesStore.getMonthTransactions(2022, 1));
  }
}
