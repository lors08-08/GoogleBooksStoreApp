import { axiosRequest } from '@src/app/Axios';
import { TBooks, TCategory, TFilters, TOrderBy } from '../types';

function generateBooksApiUrl(
  searchValue: string,
  category: TCategory,
  orderBy: TOrderBy,
  maxResults: number,
  apiKey: string,
) {
  const queryParts = [`intitle:${searchValue}`];

  if (category !== 'all') {
    queryParts.push(`subject:${category}`);
  }

  const query = queryParts.join('+');

  return `volumes?q=${query}&orderBy=${orderBy}&maxResults=${maxResults}&key=${apiKey}`;
}

export const fetchBooksList = async (filters: TFilters): Promise<TBooks> => {
  const { searchValue = '', category, orderBy, maxResults } = filters;

  const { data } = await axiosRequest(
    generateBooksApiUrl(
      searchValue,
      category,
      orderBy,
      maxResults,
      process.env.BOOKS_API_KEY,
    ),
  );

  return data;
};
