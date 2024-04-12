// auth.state.ts
export interface AuthState {
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
};
