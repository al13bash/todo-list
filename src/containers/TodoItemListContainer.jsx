import { connect } from 'react-redux';
import TodoItemList from '../components/TodoItemList/TodoItemList';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todoApp.present.todos,
    displayedCategoryId: state.todoApp.present.displayedCategoryId,
    showDoneTodos: state.todoApp.present.showDoneTodos,
    search: state.todoApp.present.search
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
