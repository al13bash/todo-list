import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TODOS_CATEGORY, EDIT_TODO, TRIGGER_TODO_CHECK } from '../constants/actionTypes';

let todoId = 3;

export const addTodo = (text, categoryId) => {
  todoId += 1;
  return {
    type: ADD_TODO,
    id: todoId,
    text,
    categoryId,
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = categoryId => ({
  type: REMOVE_TODO,
  categoryId,
});

export const changeTodosCategory = (categoryId, todosId) => ({
  type: CHANGE_TODOS_CATEGORY,
  todosId,
  categoryId,
});

export const editTodo = (id, title, description, done) => ({
  type: EDIT_TODO,
  id,
  title,
  description,
  done,
});

export const triggerTodoCheck = categoryId => ({
  type: TRIGGER_TODO_CHECK,
  categoryId,
});
