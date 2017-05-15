export let categoryId = 5;

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

export const editCategory = (id, name) => {
  return {
    type: 'CHANGE_CATEGORY_NAME',
    id,
    name
  }
}

export const changeDisplayedCategoryId = (id) => {
  return {
    type: 'CHANGE_DISPLAYED_CATEGORY_ID',
    id
  }
}
