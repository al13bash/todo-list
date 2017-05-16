import { connect } from 'react-redux';
import FilterTab from '../components/FilterTab/FilterTab.jsx';
import * as actions from '../actions/filterActionCreators';

const mapStateToProps = state => ({ categories: state.todoApp.present.categories });

const mapDispatchToProps = dispatch => ({
  toggleVisibilityFilter: (showDone) => {
    dispatch(actions.toggleVisibilityFilter(showDone));
  },
  updateSearchRequest: (text) => {
    dispatch(actions.updateSearchRequest(text));
  },
  resetSearch: () => {
    dispatch(actions.resetSearch());
  },
});

const FilterTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterTab);

export default FilterTabContainer;
