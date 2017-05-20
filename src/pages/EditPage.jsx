/* eslint no-restricted-syntax: ["error", "WithStatement",
"BinaryExpression[operator='of']"] */
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import CategoryListContainer from '../containers/CategoryListContainer.jsx';
import TodoEditForm from '../components/TodoEditForm/TodoEditForm.jsx';
import * as actions from '../actions/todoActionCreators';
import * as categoryActions from '../actions/categoryActionCreators';
import './Page.sass';

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: undefined,
      prevCategoryId: undefined,
    };

    this.getTodoById = this.getTodoById.bind(this);
    this.setPrevCategoryId = this.setPrevCategoryId.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancel = this.cancel.bind(this);
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

  setPrevCategoryId(categoryId) {
    this.setState({ prevCategoryId: categoryId });
  }

  saveChanges(id, todo) {
    this.props.editTodo(id, todo);
    this.props.changeTodosCategory(this.props.displayedCategoryId, id);
    this.props.triggerTodoCheck(this.props.displayedCategoryId);
    this.props.triggerTodoCheck(this.state.prevCategoryId);
    this.cancel();
  }

  cancel() {
    browserHistory.push(`/category/${this.props.displayedCategoryId}?showDone=${this.props.showDoneTodos}`);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>{ this.state.todo.title }</h1>
        </div>
        <div className="content_container">
          <Paper zDepth={2} className="page">
            <div className="list">
              <CategoryListContainer
                edit
                todo={this.state.todo}
                changeTodosCategory={this.props.changeTodosCategory}
                setPrevCategoryId={this.setPrevCategoryId}
              />
            </div>
          </Paper>
          <Paper zDepth={2} className="page">
            <TodoEditForm
              todo={this.state.todo}
              editTodo={this.props.editTodo}
              displayedCategoryId={this.props.displayedCategoryId}
              changeDisplayedCategoryId={this.props.changeDisplayedCategoryId}
              showDone={this.props.showDoneTodos}
              saveChanges={this.saveChanges}
              cancel={this.cancel}
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
  changeDisplayedCategoryId: (id) => {
    dispatch(categoryActions.changeDisplayedCategoryId(id));
  },
  triggerTodoCheck: (categoryId) => {
    dispatch(actions.triggerTodoCheck(categoryId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
