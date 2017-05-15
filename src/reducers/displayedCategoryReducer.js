export const displayedCategoryInitialState = {
  id: undefined
}

const displayedCategory = (state = displayedCategoryInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_DISPLAYED_CATEGORY_ID':
      return Object.assign({}, state, { id: action.id })
    default:
      return state  
  }
}

export default displayedCategory;
