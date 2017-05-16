import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import './FilterTab.sass';

class FilterTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDone: true,
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.props.updateSearchRequest(e.target.value);
    this.setState({ searchValue: e.target.value });
  }

  handleReset() {
    this.props.resetSearch();
    this.setState({ searchValue: '' });
  }

  handleCheck() {
    this.props.toggleVisibilityFilter(!this.state.showDone);

    const location = Object.assign({}, browserHistory.getCurrentLocation());
    Object.assign(location.query, { showDone: !this.state.showDone });
    browserHistory.push(location);

    this.setState({ showDone: !this.state.showDone });
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
        <div>
          <TextField hintText="Search" value={this.state.searchValue} onChange={this.handleChange}/>
          <RaisedButton label="Reset" secondary={true} onClick={this.handleReset}/>
        </div>
      </div>
    );
  }
}

export default FilterTab;
