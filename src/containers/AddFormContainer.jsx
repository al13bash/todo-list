import { connect } from 'react-redux';
import AddForm from '../components/AddForm/AddForm';
import * as actions from '../actions';

const mapStateToProps = state => { return {state} }

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(actions.addTodo(text));
    },
    addCategory: (name) => {
      dispatch(actions.addCategory(name, undefined, true));
    }
  }
}

const AddFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

export default AddFormContainer;
