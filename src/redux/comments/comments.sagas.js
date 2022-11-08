import { takeLatest, put } from "redux-saga/effects";
import CommentsActionTypes from "./comments.types";
import {
  fetchCommentsFailure,
  fetchCommentsSuccess,
  clearCommentMessages,
  editCommentFailure,
  editCommentSuccess,
  deleteCommentFailure,
  deleteCommentSuccess,
  addCommentFailure,
  addCommentSuccess,
} from "./comments.actions";
import axios from "../../utils/axios";

export function* fetchCommentsStartAsync() {
  try {
    const comments = yield axios.get("comments").then((res) => res.data);
    console.log(comments);
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export function* editCommentStartAsync(action) {
  try {
    const Comment = action.payload;
    const editedComment = yield axios
      .put(`Comments/${Comment.id}`, Comment)
      .then((res) => res.data);

    yield put(editCommentSuccess(editedComment));
  } catch (error) {
    yield put(editCommentFailure(error.message));
  }
}

export function* addCommentStartAsync(action) {
  try {
    const Comment = action.payload;
    const CommentAdded = yield axios
      .post(`Comments/`, Comment)
      .then((res) => res.data);

    yield put(addCommentSuccess(CommentAdded));
  } catch (error) {
    yield put(addCommentFailure(error.message));
  }
}

export function* deleteCommentStateAsync(action) {
  try {
    const id = action.payload;
    yield axios.delete(`Comments/${id}`).then((res) => res.status);
    yield put(deleteCommentSuccess(id));
  } catch (error) {
    yield put(deleteCommentFailure(error.message));
  }
}

export function* clearCommentMessagesStart() {
  yield put(clearCommentMessages());
}

//Not necessary unless you have more than one sagas exports
//The array should contain a list of actions to be listened to

export default function* CommentsSaga() {
  yield takeLatest(CommentsActionTypes.ADD_COMMENT_START, addCommentStartAsync);
  yield takeLatest(
    CommentsActionTypes.EDIT_COMMENT_START,
    editCommentStartAsync
  );
  yield takeLatest(
    CommentsActionTypes.DELETE_COMMENT_START,
    deleteCommentStateAsync
  );
  yield takeLatest(
    CommentsActionTypes.FETCH_COMMENTS_START,
    fetchCommentsStartAsync
  );
  yield takeLatest(
    [
      CommentsActionTypes.DELETE_COMMENT_FAILURE,
      CommentsActionTypes.DELETE_COMMENT_SUCCESS,
      CommentsActionTypes.ADD_COMMENT_FAILURE,
      CommentsActionTypes.ADD_COMMENT_SUCCESS,
      CommentsActionTypes.EDIT_COMMENT_FAILURE,
      CommentsActionTypes.EDIT_COMMENT_SUCCESS,
      CommentsActionTypes.FETCH_COMMENTS_FAILURE,
      CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    ],
    clearCommentMessagesStart
  );
}
