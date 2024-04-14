import { configureStore } from '@reduxjs/toolkit';

import { searchBooksSlice } from '@src/features/SearchBooks/ducks/reducer/searchBooks';
import { errorAlertSlice } from '../../widgets/ErrorAlert/ducks/reducer/errorAlert';

export const store = configureStore({
  reducer: {
    searchBooksSlice: searchBooksSlice.reducer,
    errorAlertSlice: errorAlertSlice.reducer,
  },
});
