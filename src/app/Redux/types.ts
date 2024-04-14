import {
  Action,
  ThunkAction,
  ThunkDispatch as ThunkDispatchRedux,
} from '@reduxjs/toolkit';

import { store } from '@src/app/Redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type ThunkDispatch = ThunkDispatchRedux<RootState, unknown, any>;
