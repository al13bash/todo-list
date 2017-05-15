let todoId = 3;

export const addTodo = (text, categoryId) => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    text,
    categoryId
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = (categoryId) => {
  return {
    type: 'REMOVE_TODO',
    categoryId
  }
}

export const changeTodosCategory = (categoryId, todoId) => {
  return {
    type: 'CHANGE_TODOS_CATEGORY',
    todoId,
    categoryId
  }
}

export const editTodo = (id, title, description, done) => {
  return {
    type: 'EDIT_TODO',
    id,
    title,
    description,
    done
  }
}

export const triggerTodoCheck = (categoryId) => {
  return {
    type: 'TRIGGER_TODO_CHECK',
    categoryId
  }
}
