import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TodoItemListContainer from './containers/TodoItemListContainer';
import AddFormContainer from './containers/AddFormContainer';
import ProgressBarContainer from './containers/ProgressBarContainer';
import CategoryListContainer from './containers/CategoryListContainer';
import './App.css';

class App extends Component {
  render() {
    const style = {
      paper: {
        padding: 20,
        margin: 20
      },
      flex: {
        display: "flex",
        justifyContent: "center"
      }
    }


    return (
      <div>
        <ProgressBarContainer />
        <div style={style.flex}>
          <Paper zDepth={2} style={style.paper}>
            <AddFormContainer type='category'/>
            <CategoryListContainer />
          </Paper>
          <Paper zDepth={2} style={style.paper}>
            <AddFormContainer type='todo'/>
            <TodoItemListContainer />
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
