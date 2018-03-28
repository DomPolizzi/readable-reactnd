import { receive } from '../utils/helper';
import * as Api from '../utils/Api';
import { FETCH_POSTS, DELETE_POST, UPDATE_POST, ADD_POST } from './types';

export const fetchPosts = () => dispatch =>
  Api.getPosts().then(payload => dispatch(receive(FETCH_POSTS, payload)));

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

export const addPost = post => dispatch =>
  Api.addPost(post).then(payload => {
    dispatch({
      type: ADD_POST,
      payload
    });
  });

export const updatePost = post => dispatch =>
  Api.editPost(post).then(payload => dispatch(receive(UPDATE_POST, payload)));
