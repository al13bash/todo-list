import { TOGGLE_VISIBILITY_FILTER } from '../constants/actionTypes';

const visibilityFilter = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY_FILTER:
      return action.showDone;
    default:
      return state;
  }
};

export default visibilityFilter;
