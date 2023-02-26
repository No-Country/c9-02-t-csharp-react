import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Account } from '../../shared/interfaces';

const initialState: Account = {
  alias: '',
  balance: 0,
  cbU_CVU: '',
  email: '',
  name: '',
  lasName: '',
  success: false,
  rewardPoints: 0,
};

export const LoginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Account>) => {
      state = action.payload;
      state = {
        ...state,
        success: true,
      };
      return state;
    },
    userLogout: (state) => {
      state = { ...state, success: false };
    },
  },
});

export const { setUser, userLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
