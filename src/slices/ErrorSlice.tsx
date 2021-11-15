import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  loginError: string;
  profileError: string;
}

const initialState = { loginError: "", profileError: "" } as ErrorState;

export const ErrorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload;
    },
    removeLoginError: (state) => {
      state.loginError = "";
    },
    setProfileError: (state, action: PayloadAction<string>) => {
      state.profileError = action.payload;
    },
    removeProfileError: (state) => {
      state.profileError = "";
    },
  },
});

export const {
  setLoginError,
  removeLoginError,
  setProfileError,
  removeProfileError,
} = ErrorSlice.actions;
export const selectLoginError = (state: any) => state.error.loginError;
export const selectProfileError = (state: any) => state.error.profileError;
export default ErrorSlice.reducer;
