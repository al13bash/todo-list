import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import './FilterTab.sass';
import '../CategoryForm/CategoryForm.sass';

class FilterTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDone: this.props.showDoneTodos,
      searchValue: this.props.search,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.props.updateSearchRequest(e.target.value);
    this.setState({ searchValue: e.target.value });

    const location = Object.assign({}, browserHistory.getCurrentLocation());
    Object.assign(location.query, { search: e.target.value });
    browserHistory.push(location);
  }

  handleReset() {
    this.props.resetSearch();
    this.setState({ searchValue: '' });

    const location = Object.assign({}, browserHistory.getCurrentLocation());
    location.query = { showDone: location.query.showDone };
    browserHistory.push(location);
  }

  handleCheck() {
    this.props.toggleVisibilityFilter(!this.state.showDone);
    this.setState({ showDone: !this.state.showDone });

    const location = Object.assign({}, browserHistory.getCurrentLocation());
    Object.assign(location.query, { showDone: !this.state.showDone });
    browserHistory.push(location);
  }

  render() {
    return (
      <div className="flex">
        <div>
          <Checkbox
            label="Show done"
            onCheck={this.handleCheck}
            checked={this.state.showDone}
            className="checkbox"
          />
        </div>
        <div className="form_container">
          <TextField
            hintText="Search"
            value={this.state.searchValue}
            onChange={this.handleChange}
            className="input"
          />
          <RaisedButton label="Reset" secondary={true} onClick={this.handleReset}/>
        </div>
      </div>
    );
  }
}

FilterTab.propTypes = {
  toggleVisibilityFilter: PropTypes.func.isRequired,
  updateSearchRequest: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  showDoneTodos: PropTypes.bool.isRequired,
};

export default FilterTab;
