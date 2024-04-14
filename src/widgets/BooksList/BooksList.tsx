import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useSelector } from '@src/app/Redux/utils';
import { BooksSelector } from '@src/features/SearchBooks';
import { BookItem } from '@src/widgets/BooksList/components/BookItem';
import { LoadMore } from '@src/widgets/BooksList/components/LoadMore';

import './booksList.css';

const SWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10%;
  padding: 4%;
`;
const STitle = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 30px 0;
`;

export const BooksList: FC = () => {
  const { data, isLoading } = useSelector(BooksSelector);

  return (
    <SWrapper>
      {isLoading && <CircularProgress />}
      {data?.totalItems ? (
        <STitle>Total Items found: {data?.totalItems}</STitle>
      ) : (
        <STitle>Total Items found: 0</STitle>
      )}
      <SListContainer>
        <TransitionGroup component={null}>
          {data?.items?.map((item) => (
            <CSSTransition key={item.id} timeout={500} classNames="item">
              <BookItem
                title={item.volumeInfo.title}
                author={item.volumeInfo?.authors}
                category={item.volumeInfo?.categories}
                image={item.volumeInfo?.imageLinks?.thumbnail}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </SListContainer>
      {data?.items?.length ? <LoadMore /> : null}
    </SWrapper>
  );
};
