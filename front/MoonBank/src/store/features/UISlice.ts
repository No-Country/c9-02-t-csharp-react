import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UIStates } from '../../shared/interfaces';

const initialState: UIStates = {
  isNavToggled: false,
  logoutDialogShow: false,
  depositDialogShow: false,
  sendDialogShow: false,
};

export const UISlice = createSlice({
  name: 'NavBarSlice',
  initialState,
  reducers: {
    setNavbarState: (state, action: PayloadAction<boolean>) => {
      state.isNavToggled = action.payload;
    },
    toggleNavbar: (state) => {
      state.isNavToggled = !state.isNavToggled;
    },
    setLogoutDialog: (state, action: PayloadAction<boolean>) => {
      state.logoutDialogShow = action.payload;
    },
    setDepositDialog: (state, action: PayloadAction<boolean>) => {
      state.depositDialogShow = action.payload;
    },
    setSendDialog: (state, action: PayloadAction<boolean>) => {
      state.sendDialogShow = action.payload;
    },
  },
});

export const { setNavbarState, toggleNavbar, setLogoutDialog, setDepositDialog, setSendDialog } = UISlice.actions;
export default UISlice.reducer;
