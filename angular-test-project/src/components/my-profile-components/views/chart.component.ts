import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  template: '<canvas id="myChart" width="400" height="400"></canvas>',
})
export class ChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            data: [3332, 4021, 2943, 3432],
            fill: true,
            backgroundColor: 'rgba(56, 97, 246, 0.2)',
            borderColor: 'rgba(56, 97, 246, 1)',
            borderWidth: 5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}
