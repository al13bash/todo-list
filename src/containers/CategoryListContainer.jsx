import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList/CategoryList.jsx';
import * as actions from '../actions/categoryActionCreators';

const mapStateToProps = state => ({
  categories: state.todoApp.present.categories,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
});

const mapDispatchToProps = dispatch => ({
  changeDisplayedCategoryId: (id) => {
    dispatch(actions.changeDisplayedCategoryId(+id));
  },
});

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
