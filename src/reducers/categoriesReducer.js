import { ADD_CATEGORY, REMOVE_CATEGORY, CHANGE_CATEGORY_NAME, TRIGGER_TODO_CHECK } from '../constants/actionTypes';
import * as utils from './utils/categoryUtils';

export const categoriesInitialState = [
  {
    id: 0,
    name: 'CAT 1',
    done: false,
    children: [{
      id: 2,
      name: 'CAT 1-1',
      done: true,
      children: [{
        id: 4,
        name: 'CAT 1-1-1',
        done: true,
        children: [],
      }],
    },
    {
      id: 3,
      name: 'CAT 1-2',
      done: true,
      children: [],
    }],
  },
  {
    id: 1,
    name: 'CAT 2',
    done: false,
    children: [],
  },
];

const categories = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      if (action.isRoot) {
        return [{
          id: action.id,
          name: action.name,
          done: true,
          children: [],
        }, ...state];
      }
      return state.map(c => utils.addCategoryToChild(c, action));
    case REMOVE_CATEGORY:
      state.forEach((item) => {
        if (item.id === action.id) {
          return state.filter(c => c.id !== action.id);
        }
        return undefined;
      });
      return state.map(c => utils.deleteChildCategory(c, action));
      // for (const item of state) {
      //   if (item.id === action.id) {
      //     return state.filter(item => item.id !== action.id);
      //   }
      // }
      // return state.map(c => utils.deleteChildCategory(c, action));

    case CHANGE_CATEGORY_NAME:
      return state.map(c => utils.editCategoryName(c, action));
    case TRIGGER_TODO_CHECK:
      return state.map(c => utils.changeCategoryDone(c, action));
    default:
      return state;
  }
};

export default categories;
