import { createSelector } from "reselect";

export const selectComments = (state) => state.comments;

export const selectCommentsData = createSelector(
  [selectComments],
  (comments) => comments.data
);

export const selectCommentsErrorMessage = createSelector(
  [selectComments],
  (comments) => comments.errorMessage
);

export const selectCommentsFetchStatus = createSelector(
  [selectComments],
  (comments) => comments.isFetching
);
