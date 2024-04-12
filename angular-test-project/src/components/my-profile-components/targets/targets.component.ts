import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'targets-component',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css'],
})
export class TargetsComponent {
  viewsTarget: number | undefined;
  incomeTarget: number | undefined;
  followersTarget: number | undefined;
  ngOnInit(): void {
    if (this.randomDataService.cachedData !== undefined) {
      const percentage = this.randomDataService.cachedData.percentage;
      this.viewsTarget = percentage[0];
      this.incomeTarget = percentage[1];
      this.followersTarget = percentage[2];
    } else {
      this.randomDataService.fetchData().subscribe((data) => {
        this.viewsTarget = data.percentage[0];
        this.incomeTarget = data.percentage[1];
        this.followersTarget = data.percentage[2];
      });
    }
  }

  constructor(private randomDataService: RandomDataService) {}
}
