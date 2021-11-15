import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import LoginService from "services/LoginService";
import { setLoginError } from "slices/ErrorSlice";

interface AuthState {
  user: any;
}

const initialState = { user: undefined } as AuthState;

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const LoginUser = (username: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const data = await LoginService(username, password);
      dispatch(login(data));
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (e: any) {
      dispatch(setLoginError(e.message));
    }
  };
};

export const { login, logout } = AuthSlice.actions;
export const selectUser = (state: any) => state.auth.user;
export default AuthSlice.reducer;
