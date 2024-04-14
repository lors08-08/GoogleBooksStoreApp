import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TBooks, TFilters } from '@src/entities/BooksList/types';

export interface ISearchBooksState {
  data: TBooks;
  filters: TFilters;
  isLoading: boolean;
}

type TPayload = {
  data: TBooks;
  filters?: TFilters;
};

const initialState: ISearchBooksState = {
  data: {
    items: [],
    totalItems: 0,
  },
  filters: {
    searchValue: '',
    category: 'all',
    orderBy: 'relevance',
    maxResults: 10,
  },
  isLoading: false,
};

export const searchBooksSlice = createSlice({
  name: 'searchBooks',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchFinished: (state) => {
      state.isLoading = false;
    },
    fetchBooksSuccess(
      state,
      action: PayloadAction<TPayload>,
    ): ISearchBooksState {
      return {
        ...state,
        data: action.payload.data,
        filters: action.payload.filters || state.filters,
      };
    },
  },
});
