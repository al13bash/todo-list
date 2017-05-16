import { connect } from 'react-redux';
import CategoryForm from '../components/CategoryForm/CategoryForm.jsx';
import * as actions from '../actions/categoryActionCreators';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  addCategory: (name, parentId, isRoot) => {
    dispatch(actions.addCategory(name, parentId, isRoot));
  },
});

const CategoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryForm);

export default CategoryFormContainer;
