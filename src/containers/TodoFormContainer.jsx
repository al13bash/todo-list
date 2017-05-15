import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todoApp.present.todos,
    displayedCategoryId: state.todoApp.present.displayedCategory.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text, categoryId) => {
      dispatch(actions.addTodo(text, categoryId));
      dispatch(actions.triggerTodoCheck(categoryId));
    }
  }
}

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFormContainer;
