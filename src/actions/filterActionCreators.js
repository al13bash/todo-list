import { TOGGLE_VISIBILITY_FILTER, UPDATE_SEARCH_REQUEST, RESET_SEARCH } from '../constants/actionTypes';

export const toggleVisibilityFilter = showDone => ({
  type: TOGGLE_VISIBILITY_FILTER,
  showDone,
});

export const updateSearchRequest = text => ({
  type: UPDATE_SEARCH_REQUEST,
  text,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});
