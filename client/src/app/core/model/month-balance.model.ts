import {Transaction} from './transaction.model';

export interface MonthBalance {
  id?: string;
  month: number;
  year: number;
  transactions: Array<Transaction>;
}
