import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/services/random-data.service';

@Component({
  selector: 'smiles-component',
  templateUrl: './smiles.component.html',
  styleUrls: ['./smiles.component.css'],
})
export class SmilesComponent implements OnInit {
  smiles: number | undefined;

  constructor(private randomDataService: RandomDataService) {}

  ngOnInit(): void {
    this.randomDataService.fetchData().subscribe((data) => {
      this.smiles = data.smiles;
    });
  }
}
