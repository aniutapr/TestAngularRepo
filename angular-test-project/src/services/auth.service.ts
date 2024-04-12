import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { logout } from '../store/actions/auth.actions';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userEmail = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  login(user: User): Observable<any> {
    this.loggedIn.next(true);
    this.userEmail.next(user.email);
    return of(true);
  }

  logout() {
    this.store.dispatch(logout());
    this.userEmail.next('');
    this.router.navigate(['/login']);
  }

  getRandomUser() {
    return this.http.get('https://randomuser.me/api/');
  }
  getRandomUsers() {
    return this.http.get('https://randomuser.me/api/?results=3');
  }
  getUserEmail() {
    return this.userEmail.asObservable();
  }
}
