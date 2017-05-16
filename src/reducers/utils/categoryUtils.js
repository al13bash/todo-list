/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement",
"BinaryExpression[operator='of']"] */

export const addCategoryToChild = (category, action) => {
  if (category.id !== action.parentId) {
    return Object.assign({}, category, {
      children: category.children.map(elem => addCategoryToChild(elem, action)),
    });
  }
  return Object.assign({}, category, {
    children: [...category.children, {
      id: action.id,
      name: action.name,
      done: true,
      children: [],
    }],
  });
};

export const deleteChildCategory = (category, action) => {
  let result;
  category.children.forEach((child, index) => {
    if (child.id === action.id) {
      result = Object.assign({}, category, {
        children:
        [...category.children.slice(0, index),
          ...category.children.slice(index + 1)],
      });
    }
  });
  if (result === undefined) {
    result = Object.assign({}, category, {
      children: category.children.map(elem => deleteChildCategory(elem, action)),
    });
  }
  return result;
};

export const editCategoryName = (category, action) => {
  if (category.id !== action.id) {
    return Object.assign({}, category, {
      children: category.children.map(elem => editCategoryName(elem, action)),
    });
  }
  return Object.assign({}, category, { name: action.name });
};

export const changeCategoryDone = (category, action) => {
  if (category.id !== action.categoryId) {
    return Object.assign({}, category, {
      children: category.children.map(elem => changeCategoryDone(elem, action)),
    });
  }
  return Object.assign({}, category, { done: action.done });
};

export const getCategory = (categories, id) => {
  let result;
  for (const category of categories) {
    if (category.id !== id) {
      result = getCategory(category.children, id);
      if (result !== undefined) {
        return result;
      }
    } else {
      return category;
    }
  }
  return result;
};

export const getCategoryChildren = (category) => {
  let array = [];
  for (const child of category.children) {
    array = array.concat(getCategoryChildren(child));
  }
  array.push(category.id);
  return array;
};
