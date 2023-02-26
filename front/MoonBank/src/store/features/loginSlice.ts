import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
}
const initialState: LoginState = {
  isLoggedIn: false,
};

export const LoginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
