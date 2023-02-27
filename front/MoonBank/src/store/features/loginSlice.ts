import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Account } from '../../shared/interfaces';
import { getAccountByAlias } from '../../APIS/getRequest';

const initialState: Account = {
  alias: '',
  balance: 0,
  cbU_CVU: '',
  email: '',
  name: '',
  lastName: '',
  success: false,
  rewardPoints: 0,
};

export const retrieveUser = createAsyncThunk(
  'loginForm/retrieve',
  async (alias:string):Promise<Account> => {
    const account = await getAccountByAlias(alias);
    return account
  }
);

export const LoginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Account>) => {
      return {
        ...action.payload,
        success: true,
      };
    },
    userLogout: (state) => {
      return { ...state, success: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveUser.fulfilled, (state, action: PayloadAction<Account>) => {
      return {
        ...action.payload,
        success: true,
      };
    });
  },
});

export const { setUser, userLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
