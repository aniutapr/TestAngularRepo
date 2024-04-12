import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/app/models/user';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((user: User) =>
        this.authService.login(user).pipe(
          map(() => AuthActions.loginSuccess()),
          catchError(() => of(AuthActions.loginFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
