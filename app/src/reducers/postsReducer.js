import { FETCH_POSTS, DELETE_POST, UPDATE_POST, DELETE_COMMENT } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.value.id);
    case UPDATE_POST:
      return state.map(
        post => (action.payload.id === post.id ? action.payload : post)
      );
      case DELETE_COMMENT:
          return state.map(post => {
            if (action.payload.parentId === post.id) {
              post.numComments = post.numComments - 1;
                return post;
            } else {
                return post;
              }
            });

    default:
      return state;
  }
}
