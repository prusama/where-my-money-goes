import {ChartData, ChartOptions} from 'chart.js';
import {MonthTransactionGroup, TransactionType} from '../../../../core/model/transaction.model';

interface BalanceHistoryItem {
  date: string | Date;
  balanceAmount: number;
}

export interface MonthListChartConfiguration {
  chartData: ChartData;
  chartOptions: ChartOptions;
}

export const getMonthListChartConfiguration = (
  monthTransactionGroup: MonthTransactionGroup,
  lineColor: string,
  ticksColor: string,
  gridColor: string,
): MonthListChartConfiguration => {
  const balanceHistory = generateBalanceHistory(monthTransactionGroup);
  const maxYValue = Math.max(...balanceHistory.map(b => b.balanceAmount));

  return {
    chartData: monthListChartData(lineColor, balanceHistory),
    chartOptions: monthListChartOptions(ticksColor, gridColor, maxYValue)
  }
}

const monthListChartData = (
  lineColor: string,
  balanceHistory: Array<BalanceHistoryItem>
): ChartData => {
  return {
    labels: balanceHistory?.map(balance => balance.date?.toString()),
    datasets: [
      {
        label: 'Transaction History',
        data: balanceHistory?.map(balance => balance.balanceAmount),
        fill: false,
        borderColor: function (context: any) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        borderWidth: 1
      }
    ]
  }
}

const getGradient = (ctx: any, chartArea: any) => {

  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, '#FF0000');
  gradient.addColorStop(0.5, '#FF0000');
  gradient.addColorStop(0.5, '#00FF00');
  gradient.addColorStop(1, '#00FF00');

  return gradient;
}

const monthListChartOptions = (
  ticksColor: string,
  gridColor: string,
  maxYValue: number
): ChartOptions => {
  return {
    elements: {
      point: {
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        display: false,
        border: {
          display: false,
        },
        ticks: {
          color: ticksColor,
        },
        grid: {
          display: false,
          color: gridColor,
        }
      },
      y: {
        min: -maxYValue,
        max: maxYValue,
        //display: false,
        border: {
          display: false,
        },
        ticks: {
          color: 'red',
          display: false,
        },
        grid: {
          //display: false,
          color: gridColor,
          lineWidth: ({tick}) => tick.value == 0 ? 1 : 0
        }
      }
    },
    animation: {
      duration: 0
    }
  };
}

const generateBalanceHistory = (monthBalance: MonthTransactionGroup): Array<BalanceHistoryItem> => {
  const calculatedHistory = monthBalance.transactions
    ?.map((elem, index) => {

      const balanceAmount = monthBalance.transactions?.slice(0, index + 1)
        ?.reduce((a, b) => {
          const amountToAdd = b.type === TransactionType.EXPENSE ? -b.amount : b.amount;

          return a + amountToAdd;
        }, 0);

      return {
        balanceAmount: balanceAmount,
        date: elem.date
      }
    });

  return [
    {balanceAmount: 0, date: monthBalance.transactions[0]?.date},
    ...calculatedHistory
  ]
}
