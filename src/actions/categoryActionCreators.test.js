import { ADD_CATEGORY, REMOVE_CATEGORY, CHANGE_CATEGORY_NAME , CHANGE_DISPLAYED_CATEGORY_ID} from '../constants/actionTypes';
import * as actions from './categoryActionCreators';

describe('Category Actions', () => {
  it('should create an action to ADD a category', () => {
    const name = 'Test Category';
    const parentId = 0;
    const isRoot = false;
    const expectedAction = {
      type: ADD_CATEGORY,
      id: actions.categoryId++,
      name,
      parentId,
      isRoot,
    };
    expect(actions.addCategory(name, parentId, isRoot)).toEqual(expectedAction);
  });

  it('should create an action to REMOVE a category', () => {
    const id = 2;
    const expectedAction = {
      type: REMOVE_CATEGORY,
      id,
    };
    expect(actions.removeCategory(id)).toEqual(expectedAction);
  });

  it('should create an action to CHANGE category name', () => {
    const id = 2;
    const name = 'New category name';
    const expectedAction = {
      type: CHANGE_CATEGORY_NAME,
      id,
      name,
    };
    expect(actions.editCategory(id, name)).toEqual(expectedAction);
  });

  it('should create an action to change displayed category id', () => {
    const id = 2;
    const expectedAction = {
      type: CHANGE_DISPLAYED_CATEGORY_ID,
      id,
    };
    expect(actions.changeDisplayedCategoryId(id)).toEqual(expectedAction);
  });
});
