import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {YearBalance} from '../../../../core/model/year-balance.model';
import {MONTH_NAMES} from '../../../../core/constants/months.const';
import {MonthBalance} from '../../../../core/model/month-balance.model';
import { $dt } from '@primeng/themes';
import {ChartData, ChartOptions} from 'chart.js';

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

  monthsGrid: Signal<Array<MonthsGridItem>> = computed(() => {
    return this.yearBalance()?.months?.map((month) => {
      const maxYValue = Math.max(...month.transactions?.map(t => t.amount));

      return {
        ...month,
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'First Dataset',
              data: [0, 65, -23, -40, 86, 56, 55, 40],
              fill: false,
              borderColor: $dt('primary.color'),
              tension: 0.4,
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


}
