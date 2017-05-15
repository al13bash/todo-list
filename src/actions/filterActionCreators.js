export const toggleVisibilityFilter = (showDone) => {
  return {
    type: 'TOGGLE_VISIBILITY_FILTER',
    showDone
  }
}

export const updateSearchRequest = (text) => {
  return {
    type: 'UPDATE_SEARCH_REQUEST',
    text
  }
}

export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH'
  }
}
