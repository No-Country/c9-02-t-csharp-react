import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '../../shared/interfaces';


interface LoginState extends Account {
  isLoggedIn: boolean;
}
const initialState: LoginState = {
  isLoggedIn: false,
  id: -1,
  name: "",
  lastName: "",
  email: "",
  password: "",
  alias:  "",
  cbu_cvu: 0,
  balance: 0,
  rewardPoints: 0,
};

export const LoginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setLogin: (state, action:PayloadAction<Account>) => {
      state.isLoggedIn = true;
state = {...initialState,}
      
    },
  },
});

export const { setLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
