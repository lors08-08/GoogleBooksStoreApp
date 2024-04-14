import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
  TypedUseSelectorHook,
  shallowEqual,
} from 'react-redux';

import type { RootState, ThunkDispatch } from './types';

export const useSelector: TypedUseSelectorHook<RootState> = (selector) =>
  originalUseSelector(selector, shallowEqual);

export const useDispatch = () => originalUseDispatch<ThunkDispatch>();
