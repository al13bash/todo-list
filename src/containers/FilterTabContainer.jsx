import { connect } from 'react-redux';
import FilterTab from '../components/FilterTab/FilterTab';
import * as actions from '../actions';

const mapStateToProps = state => { return {categories: state.todoApp.categories} }

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibilityFilter: (showDone) => {
      console.log(showDone);
      dispatch(actions.toggleVisibilityFilter(showDone));
    }
  }
}

const FilterTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTab);

export default FilterTabContainer;
