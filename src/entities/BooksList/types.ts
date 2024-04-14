export type TCategory = 'all' | 'art' | 'biography' | 'computers' | 'history';
export type TOrderBy = 'newest' | 'relevance';

export type TFilters = {
  searchValue?: string;
  category: TCategory;
  orderBy: TOrderBy;
  maxResults: number;
};

type TBookItem = {
  id: string;
  volumeInfo: {
    title: string;
    categories: string[];
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};

export type TBooks = {
  items: TBookItem[];
  totalItems: number;
};
