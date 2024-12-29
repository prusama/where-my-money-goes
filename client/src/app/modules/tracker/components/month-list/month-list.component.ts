import {Component, input, InputSignal} from '@angular/core';
import {YearBalance} from '../../../../core/model/year-balance.model';

@Component({
  selector: 'app-month-list',
  standalone: false,
  templateUrl: './month-list.component.html',
  styleUrl: './month-list.component.scss'
})
export class MonthListComponent {
  yearBalance: InputSignal<YearBalance> = input.required();
}
