import { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';
import reduceReducers from 'reduce-reducers';
import todos, { todosInitialState } from './todosReducer';
import categories, { categoriesInitialState } from './categoriesReducer';
import displayedCategory, { displayedCategoryInitialState } from './displayedCategoryReducer';
import search from './searchReducer';
import visibilityFilter from './visibilityFilterReducer';
import * as utils from './utils/categoryUtils';
import { TRIGGER_TODO_CHECK, REMOVE_TODO } from '../constants/actionTypes';


export const initialState = {
  todos: todosInitialState,
  categories: categoriesInitialState,
  displayedCategory: displayedCategoryInitialState,
  visibilityFilter: true,
  search: '',
};

const todoApp = reduceReducers(
  combineReducers({
    categories,
    todos,
    displayedCategory,
    visibilityFilter,
    search,
  }),
  (state, action) => {
    switch (action.type) {
      case TRIGGER_TODO_CHECK: {
        let isDone = { done: false };
        if (state.todos.filter(item => item.categoryId === state.displayedCategory.id)
          .every(item => item.done === true)) {
          isDone = Object.assign({}, isDone, { done: true });
        }
        return Object.assign({}, state, {
          categories: categories(state.categories, Object.assign({}, action, isDone)),
        });
      }
      case REMOVE_TODO: {
        console.log('KEKE', utils.getCategory(state.categories, action.categoryId));
        const categoryIds = utils.getCategoryChildren(
          utils.getCategory(state.categories, action.categoryId),
        );
        return Object.assign({}, state, {
          todos: state.todos.filter(todo => !categoryIds.includes(todo.categoryId)),
        });
      }
      default:
        return state;
    }
  },
);

const undoableTodos = undoable(todoApp, {
  limit: 10,
  filter: excludeAction([
    'TRIGGER_TODO_CHECK',
    'CHANGE_DISPLAYED_CATEGORY_ID',
    '@@router/LOCATION_CHANGE',
    'UPDATE_SEARCH_REQUEST',
    'RESET_SEARCH',
    'TOGGLE_VISIBILITY_FILTER',
    'REMOVE_CATEGORY',
  ]),
  initTypes: ['@@redux/INIT', '@@INIT'],
});

export default undoableTodos;
