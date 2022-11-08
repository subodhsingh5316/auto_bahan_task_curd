import PostsActionTypes from "./posts.types";

export const clearPostMessages = () => ({
  type: PostsActionTypes.CLEAR_POST_MESSAGES,
});
export const fetchPostsStart = () => ({
  type: PostsActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const editPostStart = (payload) => ({
  type: PostsActionTypes.EDIT_POST_START,
  payload,
});

export const editPostSuccess = (post) => ({
  type: PostsActionTypes.EDIT_POST_SUCCESS,
  payload: post,
});

export const editPostFailure = (errorMessage) => ({
  type: PostsActionTypes.EDIT_POST_FAILURE,
  payload: errorMessage,
});

export const addPostStart = (payload) => ({
  type: PostsActionTypes.ADD_POST_START,
  payload,
});

export const addPostSuccess = (post) => ({
  type: PostsActionTypes.ADD_POST_SUCCESS,
  payload: post,
});

export const addPostFailure = (errorMessage) => ({
  type: PostsActionTypes.ADD_POST_FAILURE,
  payload: errorMessage,
});

export const deletePostStart = (payload) => ({
  type: PostsActionTypes.DELETE_POST_START,
  payload,
});

export const deletePostSuccess = (id) => ({
  type: PostsActionTypes.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostFailure = (errorMessage) => ({
  type: PostsActionTypes.DELETE_POST_FAILURE,
  payload: errorMessage,
});
