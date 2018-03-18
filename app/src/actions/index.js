import * as Api from '../utils/Api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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
    dispatch(receive(FETCH_COMMENTS, { postId, payload }))
  );

export const orderBy = newOrder => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    value: newOrder
  });

export const deletePost = post => dispatch =>
  Api.deletePost(post.id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: DELETE_POST,
        value: post
      });
    }
  });

export const votePost = (id, option) => dispatch =>
  Api.votePost(id, option).then(payload =>
    dispatch(receive(UPDATE_POST, payload))
  );

export const getPost = id => dispatch =>
  Api.getPost(id).then(payload => dispatch(receive(UPDATE_POST, payload)));

export const voteComment = (id, option) => dispatch =>
  Api.voteComment(id, option).then(payload =>
    dispatch(receive(UPDATE_COMMENT, payload))
  );

export const deleteComment = comment => dispatch =>
  Api.deleteComment(comment.id).then(res => {
    dispatch({
      type: DELETE_COMMENT,
      payload: comment
    });
  });
