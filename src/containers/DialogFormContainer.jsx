import { connect } from 'react-redux';
import DialogForm from '../components/DialogForm/DialogForm';
import * as actions from '../actions';

const mapStateToProps = state => { return {state} }

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name, parentId, isRoot) => {
      dispatch(actions.addCategory(name, parentId, isRoot));
    },
    editCategory: (id, name) => {
      dispatch(actions.editCategory(id, name));
    },
    removeCategory: (id) => {
      dispatch(actions.removeCategory(id));
      dispatch(actions.removeTodo(id));
    }
  }
}

const DialogFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogForm);

export default DialogFormContainer;
