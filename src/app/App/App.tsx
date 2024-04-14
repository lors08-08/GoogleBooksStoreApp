import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { Main } from '@pages/Main';
import { store } from '@src/app/Redux/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
