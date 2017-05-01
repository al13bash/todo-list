import { connect } from 'react-redux';
import DialogForm from '../components/DialogForm/DialogForm';
import * as actions from '../actions';

const mapStateToProps = state => { return {state} }

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name, parentId, isRoot) => {
      dispatch(actions.addCategory(name, parentId, isRoot));
    }
  }
}

const DialogFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogForm);

export default DialogFormContainer;
