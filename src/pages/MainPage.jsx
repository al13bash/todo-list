/* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentWillMount",
"render", "componentWillUpdate"] }] */
/* eslint no-restricted-syntax: ["error", "WithStatement",
"BinaryExpression[operator='of']"] */
import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import TodoItemListContainer from '../containers/TodoItemListContainer.jsx';
import TodoFormContainer from '../containers/TodoFormContainer.jsx';
import CategoryFormContainer from '../containers/CategoryFormContainer.jsx';
import ProgressBarContainer from '../containers/ProgressBarContainer.jsx';
import CategoryListContainer from '../containers/CategoryListContainer.jsx';
import FilterTabContainer from '../containers/FilterTabContainer.jsx';
import UndoRedo from '../containers/UndoRedo.jsx';
import * as actions from '../actions/categoryActionCreators';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.checkUrl = this.checkUrl.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.checkUrl(nextProps.params.categoryId);
  }

  checkUrl(categoryId) {
    if (categoryId !== this.props.displayedCategoryId) {
      this.props.changeDisplayedCategoryId(categoryId);
    }
  }

  render() {
    const style = {
      paper: {
        padding: 20,
        margin: 20,
        width: 450,
      },
      flex_center: {
        display: 'flex',
        justifyContent: 'center',
      },
      flex_between: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    };
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
}

const mapStateToProps = state => ({
  todos: state.todoApp.present.todos,
  displayedCategoryId: state.todoApp.present.displayedCategory.id,
});

const mapDispatchToProps = dispatch => ({
  changeDisplayedCategoryId: (id) => {
    dispatch(actions.changeDisplayedCategoryId(+id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
