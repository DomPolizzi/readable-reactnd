import { FETCH_CATEGORIES } from '../actions';
import { baseCategory } from '../utils/config';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [baseCategory, ...action.payload.categories];
    default:
      return state;
  }
}
