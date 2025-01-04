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
  }
}
