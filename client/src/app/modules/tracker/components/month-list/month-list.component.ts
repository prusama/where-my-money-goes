import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {YearBalance} from '../../../../core/model/year-balance.model';
import {MONTH_NAMES} from '../../../../core/constants/months.const';
import {MonthBalance} from '../../../../core/model/month-balance.model';
import {$dt} from '@primeng/themes';
import {ChartData, ChartOptions} from 'chart.js';
import {TransactionType} from '../../../../core/model/transaction.model';
import {ActivatedRoute, Router} from '@angular/router';

interface MonthsGridItem extends MonthBalance {
  chartData: ChartData;
  chartOptions: ChartOptions;
}

@Component({
  selector: 'app-month-list',
  standalone: false,
  templateUrl: './month-list.component.html',
  styleUrl: './month-list.component.scss'
})
export class MonthListComponent {
  yearBalance: InputSignal<YearBalance> = input.required();
  monthNames = MONTH_NAMES;
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--p-text-color');
  textColorSecondary = this.documentStyle.getPropertyValue('--p-text-muted-color');
  surfaceBorder = this.documentStyle.getPropertyValue('--p-content-border-color');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  monthsGrid: Signal<Array<MonthsGridItem>> = computed(() => {
    return this.yearBalance()?.months?.map((month) => {
      const balanceHistory = month.transactions
        ?.map((elem, index) => month.transactions?.slice(0,index + 1)
          ?.reduce((a, b) => {
            const amountToAdd = b.type === TransactionType.EXPENSE ? -b.amount : b.amount;

            return a + amountToAdd;
          }, 0));
      const maxYValue = Math.max(...balanceHistory);

      return {
        ...month,
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'First Dataset',
              data: [
                0,
                ...balanceHistory
              ],
              fill: false,
              borderColor: $dt('primary.color'),
              //tension: 0.4,
              borderWidth: 1
            }
          ]
        },
        chartOptions: {
          elements: {
            point:{
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
                color: this.textColorSecondary,
              },
              grid: {
                display: false,
                color: this.surfaceBorder,
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
                color: this.surfaceBorder,
                lineWidth: ({ tick }) => tick.value == 0 ? 1 : 0
              }
            }
          }
        }
      }
    })
  });

  goToMonthOverview(monthBalance: MonthBalance): void {
    this.router.navigate(['year', monthBalance.year, 'month', monthBalance.month], {
      relativeTo: this.activatedRoute
    });
  }
}
