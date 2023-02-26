import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './features/loginSlice';
import UISlice from './features/UISlice';
export const store = configureStore({
  reducer: {
    login: LoginReducer,
    UIReducer: UISlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
