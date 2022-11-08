import { takeLatest, put } from "redux-saga/effects";
import PostsActionTypes from "./posts.types";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  clearPostMessages,
  editPostFailure,
  editPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  addPostFailure,
  addPostSuccess,
} from "./posts.actions";
import axios from "../../utils/axios";

export function* fetchPostsStartAsync() {
  try {
    const Posts = yield axios.get("Posts").then((res) => res.data);
    yield put(fetchPostsSuccess(Posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* editPostStartAsync(action) {
  try {
    const Post = action.payload;
    const editedPost = yield axios
      .put(`Posts/${Post.id}`, Post)
      .then((res) => res.data);

    yield put(editPostSuccess(editedPost));
  } catch (error) {
    yield put(editPostFailure(error.message));
  }
}

export function* addPostStartAsync(action) {
  try {
    const Post = action.payload;
    const PostAdded = yield axios.post(`Posts/`, Post).then((res) => res.data);

    yield put(addPostSuccess(PostAdded));
  } catch (error) {
    yield put(addPostFailure(error.message));
  }
}

export function* deletePostStateAsync(action) {
  try {
    const id = action.payload;
    yield axios.delete(`Posts/${id}`).then((res) => res.status);
    yield put(deletePostSuccess(id));
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}

export function* clearPostMessagesStart() {
  yield put(clearPostMessages());
}

//Not necessary unless you have more than one sagas exports
//The array should contain a list of actions to be listened to

export default function* PostsSaga() {
  yield takeLatest(PostsActionTypes.ADD_POST_START, addPostStartAsync);
  yield takeLatest(PostsActionTypes.EDIT_POST_START, editPostStartAsync);
  yield takeLatest(PostsActionTypes.DELETE_POST_START, deletePostStateAsync);
  yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsStartAsync);
  yield takeLatest(
    [
      PostsActionTypes.DELETE_POST_FAILURE,
      PostsActionTypes.DELETE_POST_SUCCESS,
      PostsActionTypes.ADD_POST_FAILURE,
      PostsActionTypes.ADD_POST_SUCCESS,
      PostsActionTypes.EDIT_POST_FAILURE,
      PostsActionTypes.EDIT_POST_SUCCESS,
      PostsActionTypes.FETCH_POSTS_FAILURE,
      PostsActionTypes.FETCH_POSTS_SUCCESS,
    ],
    clearPostMessagesStart
  );
}
