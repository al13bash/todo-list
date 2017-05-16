import { connect } from 'react-redux';
import TodoItemList from '../components/TodoItemList/TodoItemList.jsx';
import * as actions from '../actions/todoActionCreators';

const mapStateToProps = state => ({
  todos: state.todoApp.present.todos,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
  showDoneTodos: state.todoApp.present.visibilityFilter,
  search: state.todoApp.present.search,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (todo) => {
    dispatch(actions.toggleTodo(todo.id));
    dispatch(actions.triggerTodoCheck(todo.categoryId));
  },
});

const TodoItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoItemList);

export default TodoItemListContainer;
