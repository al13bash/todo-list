import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todos,
    displayedCategoryId: state.displayedCategoryId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(actions.addTodo(text));
    }
  }
}

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFormContainer;
