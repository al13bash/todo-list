import { ADD_TODO, TOGGLE_TODO, CHANGE_TODOS_CATEGORY, EDIT_TODO } from '../constants/actionTypes';

export const todosInitialState = [
  {
    id: 0,
    title: 'Drink coffee',
    done: false,
    description: '',
    categoryId: 0,
  },
  {
    id: 1,
    title: 'Eat cookies',
    done: false,
    description: '',
    categoryId: 0,
  },
  {
    id: 2,
    title: 'Go to Batumi',
    done: false,
    description: '',
    categoryId: 1,
  },
];


const todos = (state = todosInitialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { done: !todo.done });
        }
        return todo;
      });
    case ADD_TODO:
      return [
        {
          id: action.id,
          title: action.text,
          done: false,
          description: '',
          categoryId: action.categoryId,
        }, ...state];
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            title: action.title,
            done: action.done,
            description: action.description,
          });
        }
        return todo;
      });
    case CHANGE_TODOS_CATEGORY:
      return state.map((todo) => {
        if (todo.id === action.todosId) {
          return Object.assign({}, todo, {
            categoryId: action.categoryId,
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
