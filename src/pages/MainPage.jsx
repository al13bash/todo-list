import React from 'react';
import Paper from 'material-ui/Paper';
import TodoItemListContainer from '../containers/TodoItemListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import CategoryFormContainer from '../containers/CategoryFormContainer';
import ProgressBarContainer from '../containers/ProgressBarContainer';
import CategoryListContainer from '../containers/CategoryListContainer';
import FilterTabContainer from '../containers/FilterTabContainer';

const MainPage = props => {
  const style = {
    paper: {
      padding: 20,
      margin: 20,
      width: 450
    },
    flex_center: {
      display: "flex",
      justifyContent: "center"
    },
    flex_between: {
      display: "flex",
      justifyContent: "space-between"
    }
  }

  return (
    <div>
      <div style={style.flex_between}>
        <h1>To-Do List</h1>
        <FilterTabContainer />
      </div>
      <ProgressBarContainer />
      <div style={style.flex_center}>
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

export default MainPage;
