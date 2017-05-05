import { connect } from 'react-redux';
import TodoItemList from '../components/TodoItemList/TodoItemList';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todoApp.todos,
    displayedCategoryId: state.todoApp.displayedCategoryId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (todo) => {
      dispatch(actions.toggleTodo(todo.id));
      dispatch(actions.triggerTodoCheck(todo.categoryId));
    }
  }
}

const TodoItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemList);

export default TodoItemListContainer;
