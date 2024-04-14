import { createSelector } from 'reselect';

import { RootState } from '@src/app/Redux/types';

export const BooksSelector = createSelector(
  (store: RootState) => store.searchBooksSlice,
  (booksList) => booksList,
);
