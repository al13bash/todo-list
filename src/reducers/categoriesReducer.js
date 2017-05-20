/* eslint no-restricted-syntax: ["error", "WithStatement", "BinaryExpression[operator='of']"] */
import { ADD_CATEGORY, REMOVE_CATEGORY, CHANGE_CATEGORY_NAME, TRIGGER_TODO_CHECK } from '../constants/actionTypes';
import * as utils from './utils/categoryUtils';

export const categoriesInitialState = [
  {
    id: 0,
    name: 'Work',
    done: false,
    children: [{
      id: 2,
      name: 'Project 1',
      done: true,
      children: [{
        id: 4,
        name: 'Frontend',
        done: true,
        children: [],
      }],
    },
    {
      id: 3,
      name: 'Project 2',
      done: true,
      children: [],
    }],
  },
  {
    id: 1,
    name: 'Travel',
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
      for (const item of state) {
        if (item.id === action.id) {
          return state.filter(i => i.id !== action.id);
        }
      }
      return state.map(c => utils.deleteChildCategory(c, action));

    case CHANGE_CATEGORY_NAME:
      return state.map(c => utils.editCategoryName(c, action));
    case TRIGGER_TODO_CHECK:
      return state.map(c => utils.changeCategoryDone(c, action));
    default:
      return state;
  }
};

export default categories;
