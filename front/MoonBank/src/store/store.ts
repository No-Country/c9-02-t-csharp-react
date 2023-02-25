import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './features/loginSlice';
import NavBarSlice from './features/NavBarSlice';
export const store = configureStore({
  reducer: {
    login: LoginReducer,
    NavbarReducer: NavBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
