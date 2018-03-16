import { FETCH_COMMENTS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        [action.payload.postId]: action.payload.payload
      };
    default:
      return state;
  }
}
