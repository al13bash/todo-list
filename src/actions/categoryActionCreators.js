import { ADD_CATEGORY, REMOVE_CATEGORY, CHANGE_CATEGORY_NAME, CHANGE_DISPLAYED_CATEGORY_ID } from '../constants/actionTypes';

let categoryId = 5;

export const addCategory = (name, parentId, isRoot) => {
  categoryId += 1;
  return {
    type: ADD_CATEGORY,
    id: categoryId,
    name,
    parentId,
    isRoot,
  };
};

export const removeCategory = id => ({
  type: REMOVE_CATEGORY,
  id,
});

export const editCategory = (id, name) => ({
  type: CHANGE_CATEGORY_NAME,
  id,
  name,
});

export const changeDisplayedCategoryId = id => ({
  type: CHANGE_DISPLAYED_CATEGORY_ID,
  id,
});
