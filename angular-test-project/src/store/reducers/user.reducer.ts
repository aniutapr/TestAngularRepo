import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/models/user';

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, user) => ({
    ...state,
    isLoggedIn: true,
    user,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    isLoggedIn: false,
    user: null,
  }))
);
