import PostsActionTypes from "./posts.types";
import {
  updateItemDetails,
  addNewItem,
  deleteItem,
} from "../../utils/modifier";

const initialState = {
  isFetching: false,
  data: [],
  errorMessage: null,
  message: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.CLEAR_POST_MESSAGES:
      return {
        ...state,
        errorMessage: null,
        message: null,
      };
    case PostsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.EDIT_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.EDIT_POST_SUCCESS:
      return {
        ...state,
        data: updateItemDetails(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.EDIT_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.ADD_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        data: addNewItem(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.DELETE_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        data: deleteItem(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
