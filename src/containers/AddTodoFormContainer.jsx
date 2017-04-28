import { connect } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm/AddTodoForm';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(actions.addTodo(text));
    }
  }
}

const AddTodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);

export default AddTodoFormContainer;
