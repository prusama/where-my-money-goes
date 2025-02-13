import {YearBalance} from '../model/year-balance.model';
import {CurrencyCode, TransactionType} from '../model/transaction.model';

export const YEAR_BALANCE_MOCK: Array<YearBalance> = [
  {
    id: '2',
    year: 2022,
    yearIncomes: 12000,
    yearExpenses: 6000,
    yearBalance: 2000,
    months: [
      {
        id: '18',
        month: 6,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: [
          {
            id: '100',
            date: '2022-06-01T16:29:33.717Z',
            transactionType: TransactionType.EXPENSE,
            amount: 100,
            currency: CurrencyCode.CZK,
            accountName: 'Test'
          },
          {
            id: '101',
            date: '2022-06-04T16:29:33.717Z',
            transactionType: TransactionType.EXPENSE,
            amount: 200,
            currency: CurrencyCode.CZK,
            accountName: 'Test'
          },
          {
            id: '102',
            date: '2022-06-14T16:29:33.717Z',
            transactionType: TransactionType.EXPENSE,
            amount: 100,
            currency: CurrencyCode.CZK,
            accountName: 'Test'
          },
          {
            id: '103',
            date: '2022-06-22T16:29:33.717Z',
            transactionType: TransactionType.INCOME,
            amount: 1000,
            currency: CurrencyCode.CZK,
            accountName: 'Test'
          },
          {
            id: '104',
            date: '2022-06-29T16:29:33.717Z',
            transactionType: TransactionType.EXPENSE,
            amount: 100,
            currency: CurrencyCode.CZK,
            accountName: 'Test'
          }
        ]
      },
      {
        id: '17',
        month: 5,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '16',
        month: 4,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '15',
        month: 3,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '14',
        month: 2,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '13',
        month: 1,
        year: 2022,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
    ]
  },
  {
    id: '1',
    year: 2021,
    yearIncomes: 15000,
    yearExpenses: 10000,
    yearBalance: 5000,
    months: [
      {
        id: '12',
        month: 12,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '11',
        month: 11,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '10',
        month: 10,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '9',
        month: 9,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '8',
        month: 8,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '7',
        month: 7,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '6',
        month: 6,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '5',
        month: 5,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '4',
        month: 4,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '3',
        month: 3,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '2',
        month: 2,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      },
      {
        id: '1',
        month: 1,
        year: 2021,
        monthIncomes: 1000,
        monthExpenses: 500,
        monthBalance: 500,
        transactions: []
      }
    ]
  }
];
