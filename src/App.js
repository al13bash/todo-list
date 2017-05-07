import React from 'react';
import Paper from 'material-ui/Paper';
import TodoItemListContainer from './containers/TodoItemListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import CategoryFormContainer from './containers/CategoryFormContainer';
import ProgressBarContainer from './containers/ProgressBarContainer';
import CategoryListContainer from './containers/CategoryListContainer';
import FilterTabContainer from './containers/FilterTabContainer';
import './App.css';

const App = props => {
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
      <FilterTabContainer />
      <div style={style.flex}>
        <Paper zDepth={2} style={style.paper}>
          <CategoryFormContainer />
          <CategoryListContainer />
        </Paper>
        <Paper zDepth={2} style={style.paper}>
          <TodoFormContainer />
          <TodoItemListContainer />
        </Paper>
      </div>
    </div>
  );
}

export default App;
