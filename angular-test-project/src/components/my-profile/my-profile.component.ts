import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
import * as AuthActions from 'src/store/actions/auth.actions';
import { getUser } from 'src/store/selectors/user.selector';
import { UserState } from 'src/store/states/user.state';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  randomUser: any;
  userEmail: string = '';

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authService.getRandomUser().subscribe((data: any) => {
      this.randomUser = data.results[0];
    });
    this.authService.getUserEmail().subscribe((email) => {
      this.userEmail = email;
      console.log('User Email:', this.userEmail);
    });
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/login']);
  }
}
