import { TOGGLE_VISIBILITY_FILTER, UPDATE_SEARCH_REQUEST, RESET_SEARCH } from '../constants/actionTypes';
import * as actions from './filterActionCreators';

describe('Todo Actions', () => {
  it('should create an action to toggle visibility filter', () => {
    const showDone = true;
    const expectedAction = {
      type: TOGGLE_VISIBILITY_FILTER,
      showDone,
    };
    expect(actions.toggleVisibilityFilter(showDone)).toEqual(expectedAction);
  });

  it('should create an action to update search request', () => {
    const text = 'New search text';
    const expectedAction = {
      type: UPDATE_SEARCH_REQUEST,
      text,
    };
    expect(actions.updateSearchRequest(text)).toEqual(expectedAction);
  });

  it('should create an action to reset search request', () => {
    const expectedAction = {
      type: RESET_SEARCH,
    };
    expect(actions.resetSearch()).toEqual(expectedAction);
  });
});
