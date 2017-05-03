import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.modal) {
      this.props.closeDialog();
      this.props.addCategory(this.state.value, Number(this.props.parentId), false);
    }
    else {
      this.props.addCategory(this.state.value, undefined, true);
    }
    this.setState({value: ''});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    const container = {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }

    return(
      <div style={container}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText='Enter category'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <RaisedButton
            label="Add"
            primary={true}
            type="submit" />
        </form>
      </div>
    );
  }
}

export default AddForm;
