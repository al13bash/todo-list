/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement",
"BinaryExpression[operator='of']"] */
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CategoryListContainer from '../containers/CategoryListContainer.jsx';
import TodoEditForm from '../components/TodoEditForm/TodoEditForm.jsx';
import * as actions from '../actions/todoActionCreators';

const EditPage = (props) => {
  const todoId = +props.routeParams.id;

  const getTodoById = () => {
    for (const todo of props.todos) {
      if (todo.id === todoId) return todo;
    }
    return undefined;
    // props.todos.forEach((todo) => {
    //   if (todo.id === todoId) {
    //     return todo;
    //   }
    //   return undefined;
    // });
    // return undefined;
  };

  const todo = getTodoById();

  const style = {
    paper: {
      padding: 20,
      margin: 20,
      width: 450,
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
    },
  };

  return (
    <div>
      <h1>{ todo.title }</h1>
      <div style={style.flex}>
        <Paper zDepth={2} style={style.paper}>
          <CategoryListContainer
            edit
            todoId={todoId}
            changeTodosCategory={props.changeTodosCategory}
          />
        </Paper>
        <Paper zDepth={2} style={style.paper}>
          <TodoEditForm
            todo={todo}
            editTodo={props.editTodo}
            displayedCategoryId={props.displayedCategoryId}
            showDone={props.showDoneTodos}
          />
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todoApp.present.todos,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
  showDoneTodos: state.todoApp.present.showDoneTodos,
});

const mapDispatchToProps = dispatch => ({
  editTodo: (id, todo) => {
    dispatch(actions.editTodo(id, todo.title, todo.description, todo.done));
  },
  changeTodosCategory: (categoryId, todoId) => {
    dispatch(actions.changeTodosCategory(categoryId, todoId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
