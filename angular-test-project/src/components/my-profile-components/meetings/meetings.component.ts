import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'meetings-component',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  meetings: { name: string; time: string }[] = [];
  randomUsers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getRandomUsers().subscribe((data: any) => {
      this.randomUsers = data.results;
    });
  }
}
