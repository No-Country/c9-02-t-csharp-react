import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NavbarState } from '../../shared/interfaces';

const initialState: NavbarState = {
  isToggled: false,
};

export const NavBarSlice = createSlice({
  name: 'NavBarSlice',
  initialState,
  reducers: {
    setNavbarState: (state, action: PayloadAction<boolean>) => {
      state.isToggled = action.payload;
    },
    toggleNavbar: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { setNavbarState, toggleNavbar } = NavBarSlice.actions;
export default NavBarSlice.reducer;
