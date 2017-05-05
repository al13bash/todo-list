let todoId = 3;
let categoryId = 5;

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

export const removeTodo = (categoryId) => {
  return {
    type: 'REMOVE_TODO',
    categoryId
  }
}

export const addCategory = (name, parentId, isRoot) => {
  return {
    type: 'ADD_CATEGORY',
    id: categoryId++,
    name,
    parentId,
    isRoot
  }
}

export const removeCategory = (id) => {
  return {
    type: 'REMOVE_CATEGORY',
    id
  }
}

export const changeDisplayedCategoryId = (id) => {
  return {
    type: 'CHANGE_DISPLAYED_CATEGORY_ID',
    id
  }
}

export const editCategory = (id, name) => {
  return {
    type: 'CHANGE_CATEGORY_NAME',
    id,
    name
  }
}

export const triggerTodoCheck = (categoryId) => {
  return {
    type: 'TRIGGER_TODO_CHECK',
    categoryId
  }
}
