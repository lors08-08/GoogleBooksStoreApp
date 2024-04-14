import React, { FC, useEffect } from 'react';
import { Alert } from '@mui/material';

import { useDispatch } from '@src/app/Redux';
import { errorAlertSlice } from '@src/widgets/ErrorAlert/ducks/reducer/errorAlert';

export const ErrorAlert: FC<{ children: string }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(errorAlertSlice.actions.demountError());
    }, 5000);
  }, [dispatch]);

  return <Alert severity="error">{children}</Alert>;
};
