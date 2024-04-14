import { fetchBooksList } from '@src/entities/BooksList';
import { searchBooksSlice } from '../reducer/searchBooks';
import { AppDispatch, AppThunk } from '@src/app/Redux/types';
import errorAlertSlice from '@src/widgets/ErrorAlert';
import { TFilters } from '@src/entities/BooksList/types';

export const getBooksList =
  (filters: TFilters): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(searchBooksSlice.actions.fetchStart());

      const data = await fetchBooksList(filters);

      dispatch(searchBooksSlice.actions.fetchBooksSuccess({ data, filters }));
    } catch {
      dispatch(
        errorAlertSlice.actions.fireError(
          'Something has crushed, please try again',
        ),
      );
    } finally {
      dispatch(searchBooksSlice.actions.fetchFinished());
    }
  };
