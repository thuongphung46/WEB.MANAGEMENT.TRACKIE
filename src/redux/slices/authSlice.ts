import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
// import { RootState } from "redux/store";
// import { User } from "types/user";

interface User {
  id: string | number;
  name: string;
}
export interface LoginPayload {
  UserName: string;
  Password: string;
}
// Define a type for the slice state
export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload | undefined>) {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    loginSuccess(state, action: PayloadAction<User | undefined>) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string | undefined>) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.isLoading;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
