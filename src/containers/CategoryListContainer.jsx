import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList/CategoryList';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCategory: (event) => {
      let categoryId = Number(event.target.id);
      dispatch(actions.removeCategory(categoryId));
      dispatch(actions.removeTodo(categoryId));
    },
    changeDisplayedCategoryId: (event) => {
      dispatch(actions.changeDisplayedCategoryId(Number(event.target.id)));
    }
  }
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
