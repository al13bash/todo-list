import React, { Component } from 'react';
import TodoItemListContainer from './containers/TodoItemListContainer';
import AddTodoFormContainer from './containers/AddTodoFormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodoFormContainer />
        <TodoItemListContainer />
      </div>
    );
  }
}

export default App;
