/* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentWillMount",
"render", "componentWillUpdate", "componentWillMount"] }] */
/* eslint no-restricted-syntax: ["error", "WithStatement",
"BinaryExpression[operator='of']"] */
import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TodoItemListContainer from '../containers/TodoItemListContainer.jsx';
import TodoFormContainer from '../containers/TodoFormContainer.jsx';
import CategoryFormContainer from '../containers/CategoryFormContainer.jsx';
import ProgressBarContainer from '../containers/ProgressBarContainer.jsx';
import CategoryListContainer from '../containers/CategoryListContainer.jsx';
import FilterTabContainer from '../containers/FilterTabContainer.jsx';
import UndoRedo from '../containers/UndoRedo.jsx';
import * as actions from '../actions/categoryActionCreators';
import * as filterActions from '../actions/filterActionCreators';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.checkCategoryId = this.checkCategoryId.bind(this);
    this.checkShowDone = this.checkShowDone.bind(this);
    this.checkSearch = this.checkSearch.bind(this);
  }

  componentWillMount() {
    this.checkShowDone(this.props.location.query.showDone === 'true');
    this.checkSearch(this.props.location.query.search);
  }

  componentWillReceiveProps(nextProps) {
    this.checkCategoryId(nextProps.params.categoryId);
  }

  checkSearch(seachStr) {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    if (seachStr !== this.props.search && seachStr !== undefined) {
      this.props.updateSearchRequest(seachStr);
    }
    Object.assign(location.query, { search: seachStr });
    browserHistory.push(location);
  }

  checkShowDone(isDoneShowed) {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    if (isDoneShowed !== this.props.showDoneTodos) {
      this.props.toggleVisibilityFilter(isDoneShowed);
    }
    Object.assign(location.query, { showDone: isDoneShowed });
    browserHistory.push(location);
  }

  checkCategoryId(categoryId) {
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
  showDoneTodos: state.todoApp.present.visibilityFilter,
  search: state.todoApp.present.search,
});

const mapDispatchToProps = dispatch => ({
  changeDisplayedCategoryId: (id) => {
    dispatch(actions.changeDisplayedCategoryId(+id));
  },
  toggleVisibilityFilter: (showDone) => {
    dispatch(filterActions.toggleVisibilityFilter(showDone));
  },
  updateSearchRequest: (text) => {
    dispatch(filterActions.updateSearchRequest(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
