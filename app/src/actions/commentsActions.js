import { receive } from '../utils/helper';
import * as Api from '../utils/Api';
import {
  FETCH_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT
} from './types';

export const fetchComments = postId => dispatch =>
  Api.getPostComments(postId).then(payload =>
    dispatch(receive(FETCH_COMMENTS, { postId, payload }))
  );

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

export const addComment = comment => dispatch =>
  Api.addComment(comment).then(res => {
    dispatch({
      type: ADD_COMMENT,
      payload: res
    });
  });

export const updateComment = comment => dispatch =>
  Api.editComment(comment).then(payload =>
    dispatch(receive(UPDATE_COMMENT, payload))
  );
