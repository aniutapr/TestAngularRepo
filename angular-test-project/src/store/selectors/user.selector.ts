import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserState } from '../states/user.state';

// Select the user slice of state
const selectUserState = (state: AppState) => state.user;

// Selector to get the user email
export const getUser = createSelector(
  selectUserState,
  (state: UserState) => state
);
