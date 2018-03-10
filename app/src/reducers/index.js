import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import categoriesReducer from './categoriesReducer';
import commentsReducer from './commentsReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
  order: orderReducer
});
