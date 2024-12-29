import {MonthBalance} from './month-balance.model';

export interface YearBalance {
  id: string;
  year: number;
  months: Array<MonthBalance>;
}
