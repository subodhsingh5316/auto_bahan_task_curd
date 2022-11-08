import { createSelector } from "reselect";

export const selectPosts = (state) => state.posts;

export const selectPostsData = createSelector(
  [selectPosts],
  (posts) => posts.data
);

export const selectPostsErrorMessage = createSelector(
  [selectPosts],
  (posts) => posts.errorMessage
);

export const selectPostsFetchStatus = createSelector(
  [selectPosts],
  (posts) => posts.isFetching
);
