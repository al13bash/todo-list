import { UPDATE_SEARCH_REQUEST, RESET_SEARCH } from '../constants/actionTypes';
import search from './searchReducer';

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(
      search(undefined, {}),
    ).toEqual('');
  });

  it('should handle UPDATE_SEARCH_REQUEST', () => {
    expect(
      search('Current search', {
        type: UPDATE_SEARCH_REQUEST,
        text: 'Search text',
      }),
    ).toEqual('Search text');
  });

  it('should handle RESET_SEARCH', () => {
    expect(
      search('Current search', {
        type: RESET_SEARCH,
      }),
    ).toEqual('');
  });
});
