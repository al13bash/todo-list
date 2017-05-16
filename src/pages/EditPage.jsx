/* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentWillMount"] }] */
/* eslint no-restricted-syntax: ["error", "WithStatement",
"BinaryExpression[operator='of']"] */
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CategoryListContainer from '../containers/CategoryListContainer.jsx';
import TodoEditForm from '../components/TodoEditForm/TodoEditForm.jsx';
import * as actions from '../actions/todoActionCreators';

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: undefined,
    };

    this.getTodoById = this.getTodoById.bind(this);
  }

  componentWillMount() {
    const editingTodo = this.getTodoById(+this.props.routeParams.id);
    this.setState({
      todo: editingTodo,
    });
  }

  getTodoById(todoId) {
    for (const todo of this.props.todos) {
      if (todo.id === todoId) return todo;
    }
    return undefined;
  }

  render() {
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
        <h1>{ this.state.todo.title }</h1>
        <div style={style.flex}>
          <Paper zDepth={2} style={style.paper}>
            <CategoryListContainer
              edit
              todoId={this.state.todo.id}
              changeTodosCategory={this.props.changeTodosCategory}
            />
          </Paper>
          <Paper zDepth={2} style={style.paper}>
            <TodoEditForm
              todo={this.state.todo}
              editTodo={this.props.editTodo}
              displayedCategoryId={this.props.displayedCategoryId}
              showDone={this.props.showDoneTodos}
            />
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoApp.present.todos,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
  showDoneTodos: state.todoApp.present.visibilityFilter,
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
