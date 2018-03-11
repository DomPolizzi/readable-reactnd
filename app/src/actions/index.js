import * as Api from '../utils/Api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const DELETE_POST = 'DELETE_POST';

export const receive = (type, payload) => ({
  type,
  payload
});

export const fetchPosts = () => dispatch =>
  Api.getPosts().then(payload => dispatch(receive(FETCH_POSTS, payload)));

export const fetchCategories = () => dispatch =>
  Api.getCategories().then(payload =>
    dispatch(receive(FETCH_CATEGORIES, payload))
  );

export const fetchComments = postId => dispatch =>
  Api.getPostComments(postId).then(payload =>
    dispatch(receive(FETCH_COMMENTS, payload))
  );

export const orderBy = newOrder => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    value: newOrder
  });

export const deletePost = post => distpatch =>
  Api.deletePost(post.id).then(res => {
    if (res.status === 200) {
      distpatch({
        type: DELETE_POST,
        value: post
      });
    }
  });
