import {YearBalance} from '../model/year-balance.model';
import {deepComputed, DeepSignal, patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {addEntities, addEntity, withEntities} from '@ngrx/signals/entities';
import {computed} from '@angular/core';
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
  withEntities<YearBalance>(),
  withComputed((state) => ({
    yearBalances: computed(() => YEAR_BALANCE_MOCK)
  })),
  withMethods((store) => ({
    addYear(year: number): void {
      const newBalance: YearBalance = {
        id: Math.random().toString(),
        year: year,
        months: [],
        yearIncomes: 15000,
        yearExpenses: 10000,
        yearBalance: 5000,
      };
      patchState(store, addEntity(newBalance))
    },
    loadYears(): void {
      patchState(store, addEntities(YEAR_BALANCE_MOCK))
      patchState(store, { loading: false })
    }
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
    }
  }))
);
