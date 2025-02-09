import {deepComputed, DeepSignal, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, signal} from '@angular/core';
import {YEAR_BALANCE_MOCK} from '../mocks/year-balance.mock';
import {MonthBalance} from '../model/month-balance.model';
import {Transaction} from '../model/transaction.model';

type BalancesState = {
  loading: boolean;
  error: boolean;
}

const initialState: BalancesState = {
  loading: true,
  error: false
};

export const BalancesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => ({
    yearBalances: computed(() => YEAR_BALANCE_MOCK)
  })),
  withMethods((store) => ({
    getBalancesGroupedByMonths(year: number): Array<DeepSignal<MonthBalance>> {
      const months = store.yearBalances()
        ?.find(y => y.year === year)?.months ?? [];

      return months?.map(m => {
        return deepComputed(() => m)
      });
    },
    getMonthTransactions(year: number, month: number): Array<DeepSignal<Transaction>> {
      const transactions = store.yearBalances()
        ?.find(y => y.year === year)?.months
        ?.find(m => m.month === month)?.transactions ?? [];

      return transactions?.map(t => {
        return deepComputed(() => t)
      });
    },
    getMonthBalance(year: number, month: number): DeepSignal<MonthBalance | undefined> {
      const monthBalance = store.yearBalances()
        ?.find(y => y.year === year)?.months
        ?.find(m => m.month === month);

      if (!monthBalance) {
        return signal(undefined);
      }

      return deepComputed(() => monthBalance);
    }
  }))
);
