let todoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
