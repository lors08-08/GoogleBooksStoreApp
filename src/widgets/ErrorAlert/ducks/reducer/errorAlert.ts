import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IErrorAlertSliceState {
  errorMessage: string | null;
}

const initialState: IErrorAlertSliceState = {
  errorMessage: null,
};

export const errorAlertSlice = createSlice({
  name: 'errorAlert',
  initialState,
  reducers: {
    demountError: (state) => {
      state.errorMessage = null;
    },
    fireError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});
