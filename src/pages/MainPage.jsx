/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
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
import './Page.sass';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.checkCategoryId = this.checkCategoryId.bind(this);
    this.checkQueryParams = this.checkQueryParams.bind(this);
  }

  componentWillMount() {
    this.checkQueryParams(this.props.location.query.showDone === 'true',
      this.props.location.query.search);
  }

  componentWillReceiveProps(nextProps) {
    this.checkCategoryId(nextProps.params.categoryId);
  }

  checkQueryParams(isDoneShowed, seachStr) {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    if (isDoneShowed !== this.props.showDoneTodos) {
      this.props.toggleVisibilityFilter(isDoneShowed);
    }
    if (seachStr !== this.props.search && seachStr !== undefined) {
      this.props.updateSearchRequest(seachStr);
    }
    Object.assign(location.query, { showDone: isDoneShowed }, { search: seachStr });
    browserHistory.push(location);
  }

  checkCategoryId(categoryId) {
    if (categoryId !== this.props.displayedCategoryId) {
      this.props.changeDisplayedCategoryId(categoryId);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>To-Do List</h1>
          <FilterTabContainer />
          <UndoRedo />
        </div>
        <ProgressBarContainer />
        <div className="content_container">
          <Paper zDepth={2} className="page">
            <CategoryFormContainer />
            <div className="list">
              <CategoryListContainer />
            </div>
          </Paper>
          <Paper zDepth={2} className="page">
            <TodoFormContainer />
            <div className="list">
              <TodoItemListContainer />
            </div>
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
