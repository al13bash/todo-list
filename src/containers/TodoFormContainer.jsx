import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm.jsx';
import * as actions from '../actions/todoActionCreators';

const mapStateToProps = state => ({
  todos: state.todoApp.present.todos,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (text, categoryId) => {
    dispatch(actions.addTodo(text, categoryId));
    dispatch(actions.triggerTodoCheck(categoryId));
  },
});

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoForm);

export default TodoFormContainer;
