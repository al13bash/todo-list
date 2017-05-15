import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import TodoItemListContainer from '../containers/TodoItemListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import CategoryFormContainer from '../containers/CategoryFormContainer';
import ProgressBarContainer from '../containers/ProgressBarContainer';
import CategoryListContainer from '../containers/CategoryListContainer';
import FilterTabContainer from '../containers/FilterTabContainer';
import UndoRedo from '../containers/UndoRedo';
import * as actions from '../actions/categoryActionCreators';

const MainPage = props => {

  const checkUrl = () => {
    if (props.params.categoryId !== props.displayedCategoryId) {
      props.changeDisplayedCategoryId(props.params.categoryId);
    }
  }

  checkUrl();

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
        <UndoRedo />
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

const mapStateToProps = state => {
  return {
    todos: state.todoApp.present.todos,
    displayedCategoryId: state.todoApp.present.displayedCategory.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayedCategoryId: (id) => {
      dispatch(actions.changeDisplayedCategoryId(+id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
