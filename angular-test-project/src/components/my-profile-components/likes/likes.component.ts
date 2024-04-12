import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'likes-component',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent {
  likes: number | undefined;
  loves: number | undefined;
  smiles: number | undefined;

  constructor(private randomDataService: RandomDataService) {}
  ngOnInit(): void {
    if (this.randomDataService.cachedData !== undefined) {
      this.likes = this.randomDataService.cachedData.smiles;
      this.loves = this.randomDataService.cachedData.loves;
      this.likes = this.randomDataService.cachedData.likes;

      console.log('Data from cache: ' + this.likes);
    } else {
      this.randomDataService.fetchData().subscribe((data) => {
        this.likes = data.likes;
        this.loves = data.loves;
        this.smiles = data.smiles;
        console.log('Fetched data: ' + this.likes);
      });
    }
  }
}
