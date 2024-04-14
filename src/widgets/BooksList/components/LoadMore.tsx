import React, { FC } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

import { useDispatch } from '@src/app/Redux';
import { getBooksList } from '@src/features/SearchBooks/ducks/actions/searchBooksActions';
import { useSelector } from '@src/app/Redux/utils';
import { BooksSelector } from '@src/features/SearchBooks';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMore: FC = () => {
  const dispatch = useDispatch();

  const { filters, isLoading } = useSelector(BooksSelector);

  const handleClick = () => {
    dispatch(getBooksList({ ...filters, maxResults: filters.maxResults + 30 }));
  };

  return (
    <SWrapper>
      <Button
        variant="contained"
        fullWidth={false}
        onClick={handleClick}
        disabled={isLoading}
      >
        Load more
      </Button>
    </SWrapper>
  );
};
