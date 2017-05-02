import { connect } from 'react-redux';
import TodoItemList from '../components/TodoItemList/TodoItemList';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todos,
    displayedCategoryId: state.displayedCategoryId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(actions.toggleTodo(id));
    }
  }
}

const TodoItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemList);

export default TodoItemListContainer;
