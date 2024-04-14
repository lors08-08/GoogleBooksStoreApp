import React, { FC } from 'react';
import styled from 'styled-components';

import { SearchBar } from '@src/widgets/SearchBar';
import { BooksList } from '@src/widgets/BooksList';
import { ErrorAlert, ErrorAlertSelector } from '@src/widgets/ErrorAlert';
import { useSelector } from '@src/app/Redux/utils';

const STitle = styled.div`
  padding: 3%;
  font-size: 31px;
  text-align: center;
`;
const SWrapper = styled.div`
  padding: 3%;
  box-shadow: 0px 14px 20px 10px #bababa;
  border-radius: 10px;
`;
const SErrorWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

export const Main: FC = () => {
  const { errorMessage } = useSelector(ErrorAlertSelector);

  return (
    <div>
      <STitle>Find your favorite Book</STitle>
      <SWrapper>
        <SearchBar />
      </SWrapper>
      <BooksList />
      {errorMessage && (
        <SErrorWrapper>
          <ErrorAlert>{errorMessage}</ErrorAlert>
        </SErrorWrapper>
      )}
    </div>
  );
};
