import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const login = createAction('[Auth] Login', props<User>());
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailure = createAction('[Auth] Login Failure');

export const logout = createAction('[Auth] Logout');
