import {Transaction} from './transaction.model';

export interface MonthBalance {
  id?: string;
  month: number;
  year: number;
  monthExpenses: number;
  monthIncomes: number;
  monthBalance: number;
  transactions: Array<Transaction>;
}
