import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './FilterTab.css'

class FilterTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDone: true,
      searchValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value});
  }

  handleCheck() {
    this.props.toggleVisibilityFilter(!this.state.showDone);
    this.setState({showDone: !this.state.showDone});
  }

  render() {
    return(
      <div className="flex">
        <div>
          <Checkbox
            label="Show done"
            onCheck={this.handleCheck}
            checked={this.state.showDone}
          />
        </div>
        <form>
          <TextField hintText="Search" onChange={this.handleChange}/>
          <RaisedButton label="Search" secondary={true} />
        </form>
      </div>
    );
  }
}

export default FilterTab;
