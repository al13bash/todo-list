import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CategoryListContainer from '../containers/CategoryListContainer';
import TodoEditForm from '../components/TodoEditForm/TodoEditForm';

const EditPage = props => {

  const getTodoById = () => {
    for (let todo of props.todos) {
      if (todo.id === +props.routeParams.id) return todo;
    }
  }

  const todo = getTodoById();

  const style = {
    paper: {
      padding: 20,
      margin: 20,
      width: 400
    },
    flex: {
      display: "flex",
      justifyContent: "center"
    }
  }

  return (
    <div>
      <h1>{ todo.title }</h1>
      <div style={style.flex}>
        <Paper zDepth={2} style={style.paper}>
          <CategoryListContainer />
        </Paper>
        <Paper zDepth={2} style={style.paper}>
          <TodoEditForm todo={todo}/>
        </Paper>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todoApp.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
