import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList/CategoryList';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    categories: state.todoApp.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayedCategoryId: (id) => {
      dispatch(actions.changeDisplayedCategoryId(Number(id)));
    }
  }
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
