import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import declarationReducer from '../store/declaration/declarationSlice'

export const store = configureStore({
  reducer: {
    declaration: declarationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
