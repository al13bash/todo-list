import { connect } from 'react-redux';
import DialogForm from '../components/DialogForm/DialogForm';
import * as categoryActions from '../actions/categoryActionCreators';
import * as todoActions from '../actions/todoActionCreators';

const mapStateToProps = state => { return {state} }

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name, parentId, isRoot) => {
      dispatch(categoryActions.addCategory(name, parentId, isRoot));
    },
    editCategory: (id, name) => {
      dispatch(categoryActions.editCategory(id, name));
    },
    removeCategory: (id) => {
      dispatch(todoActions.removeTodo(id));
      dispatch(categoryActions.removeCategory(id));
    }
  }
}

const DialogFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogForm);

export default DialogFormContainer;
