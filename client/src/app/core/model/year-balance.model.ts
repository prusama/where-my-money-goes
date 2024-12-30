import {MonthBalance} from './month-balance.model';

export interface YearBalance {
  id: string;
  year: number;
  yearExpenses: number;
  yearIncomes: number;
  yearBalance: number;
  months: Array<MonthBalance>;
}
