import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList/CategoryList';
import { routerMiddleware, push } from 'react-router-redux'
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    categories: state.todoApp.categories
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
      dispatch(push('/foo'));
    }
  }
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
