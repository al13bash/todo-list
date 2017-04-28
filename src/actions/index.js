let todoId = 3;

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
