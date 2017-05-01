import { connect } from 'react-redux';
import CategoryForm from '../components/CategoryForm/CategoryForm';
import * as actions from '../actions';

const mapStateToProps = state => { return {state} }

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name, parentId, isRoot) => {
      dispatch(actions.addCategory(name, parentId, isRoot));
    }
  }
}

const CategoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm);

export default CategoryFormContainer;
