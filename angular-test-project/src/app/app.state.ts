import { AuthState, initialAuthState } from 'src/store/states/auth.state';
import { UserState, initialUserState } from 'src/store/states/user.state';

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export const initialAppState: AppState = {
  auth: initialAuthState,
  user: initialUserState,
};
