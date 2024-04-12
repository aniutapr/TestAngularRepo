import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'views-component',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
})
export class ViewsComponent {}
