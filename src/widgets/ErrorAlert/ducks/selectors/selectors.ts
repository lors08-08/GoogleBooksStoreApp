import { createSelector } from 'reselect';

import { RootState } from '@src/app/Redux/types';

export const ErrorAlertSelector = createSelector(
  (store: RootState) => store.errorAlertSlice,
  (booksList) => booksList,
);
