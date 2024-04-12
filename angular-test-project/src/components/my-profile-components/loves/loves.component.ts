import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'loves-component',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css'],
})
export class LovesComponent implements OnInit {
  loves: number | undefined;

  constructor(private randomDataService: RandomDataService) {}

  ngOnInit(): void {
    if (this.randomDataService.cachedData !== undefined) {
      this.loves = this.randomDataService.cachedData.loves;
    } else {
      this.randomDataService.fetchData().subscribe((data) => {
        this.loves = data.loves;
      });
    }
  }
}
