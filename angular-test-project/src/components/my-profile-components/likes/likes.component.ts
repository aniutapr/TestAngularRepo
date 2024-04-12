import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'likes-component',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  likes: number | undefined;

  constructor(private randomDataService: RandomDataService) {}

  ngOnInit(): void {
    this.randomDataService.fetchData().subscribe((data) => {
      this.likes = data.likes;
    });
  }
}
