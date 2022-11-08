import CommentsActionTypes from "./comments.types";

export const clearCommentMessages = () => ({
  type: CommentsActionTypes.CLEAR_COMMENT_MESSAGES,
});
export const fetchCommentsStart = () => ({
  type: CommentsActionTypes.FETCH_COMMENTS_START,
});

export const fetchCommentsSuccess = (comments) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (errorMessage) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
  payload: errorMessage,
});

export const editCommentStart = (payload) => ({
  type: CommentsActionTypes.EDIT_COMMENT_START,
  payload,
});

export const editCommentSuccess = (comment) => ({
  type: CommentsActionTypes.EDIT_COMMENT_SUCCESS,
  payload: comment,
});

export const editCommentFailure = (errorMessage) => ({
  type: CommentsActionTypes.EDIT_COMMENT_FAILURE,
  payload: errorMessage,
});

export const addCommentStart = (payload) => ({
  type: CommentsActionTypes.ADD_COMMENT_START,
  payload,
});

export const addCommentSuccess = (comment) => ({
  type: CommentsActionTypes.ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentFailure = (errorMessage) => ({
  type: CommentsActionTypes.ADD_COMMENT_FAILURE,
  payload: errorMessage,
});

export const deleteCommentStart = (payload) => ({
  type: CommentsActionTypes.DELETE_COMMENT_START,
  payload,
});

export const deleteCommentSuccess = (id) => ({
  type: CommentsActionTypes.DELETE_COMMENT_SUCCESS,
  payload: id,
});

export const deleteCommentFailure = (errorMessage) => ({
  type: CommentsActionTypes.DELETE_COMMENT_FAILURE,
  payload: errorMessage,
});
