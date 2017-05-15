import displayedCategory, {displayedCategoryInitialState} from './displayedCategoryReducer'

describe('displayed category reducer', () => {
  it('should return the initial state', () => {
    expect(
      displayedCategory(undefined, {})
    ).toEqual(displayedCategoryInitialState)
  })  

  it('should handle CHANGE_DISPLAYED_CATEGORY_ID', () => {
    expect(
      displayedCategory(displayedCategoryInitialState, {
        type: 'CHANGE_DISPLAYED_CATEGORY_ID',
        id: 2
      })
    ).toEqual( { id: 2 } )
  })
})
