import { UPDATE_ORDER } from '../actions/types';
import { defaultOrder } from '../utils/config';

export default function(state = defaultOrder, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      return action.value;
    default:
      return state;
  }
}
