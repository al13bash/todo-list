import React, { Component } from 'react';
import TodoItemListContainer from './containers/TodoItemListContainer';
import AddTodoFormContainer from './containers/AddTodoFormContainer';
import ProgressBarContainer from './containers/ProgressBarContainer';
import CategoryListContainer from './containers/CategoryListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ProgressBarContainer />
        <CategoryListContainer />
        <AddTodoFormContainer />
        <TodoItemListContainer />
      </div>
    );
  }
}

export default App;
