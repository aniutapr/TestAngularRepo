import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'targets-component',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css'],
})
export class TargetsComponent implements OnInit {
  viewsTarget: number | undefined;
  incomeTarget: number | undefined;
  followersTarget: number | undefined;

  constructor(private randomDataService: RandomDataService) {}

  ngOnInit(): void {
    this.randomDataService.fetchData().subscribe((data) => {
      this.viewsTarget = data.percentage[0];
      this.incomeTarget = data.percentage[1];
      this.followersTarget = data.percentage[2];
    });
  }
}
