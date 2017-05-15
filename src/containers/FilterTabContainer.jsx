import { connect } from 'react-redux';
import FilterTab from '../components/FilterTab/FilterTab';
import * as actions from '../actions';

const mapStateToProps = state => { return {categories: state.todoApp.present.categories} }

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibilityFilter: (showDone) => {
      dispatch(actions.toggleVisibilityFilter(showDone));
    },
    updateSearchRequest: (text) => {
      dispatch(actions.updateSearchRequest(text));
    },
    resetSearch: () => {
      dispatch(actions.resetSearch());
    }
  }
}

const FilterTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTab);

export default FilterTabContainer;
