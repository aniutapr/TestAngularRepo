import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router'; // Import Router
import * as AuthActions from 'src/store/actions/auth.actions';
import { getUser } from 'src/store/selectors/user.selector';
import { UserState } from 'src/store/states/user.state';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  title = 'angular-test-project-my-profile-menu';
  userEmail: string = '';
  user$: Observable<UserState>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {
    this.user$ = this.store.pipe(select(getUser));
  }
  ngOnInit(): void {
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
