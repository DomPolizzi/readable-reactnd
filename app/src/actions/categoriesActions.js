import { receive } from '../utils/helper';
import * as Api from '../utils/Api';
import { FETCH_CATEGORIES } from './types';

export const fetchCategories = () => dispatch =>
Api.getCategories().then(payload =>
  dispatch(receive(FETCH_CATEGORIES, payload))
);
