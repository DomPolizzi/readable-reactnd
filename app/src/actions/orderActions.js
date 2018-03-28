import { UPDATE_ORDER } from './types';

export const orderBy = newOrder => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    value: newOrder
  });
