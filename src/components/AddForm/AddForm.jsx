import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hintText = this.hintText.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.type === 'todo') {
      this.props.addTodo(this.state.value);
    }
    else {
      this.props.addCategory(this.state.value)
    }
    this.setState({value: ''});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  hintText() {
    if (this.props.type === 'category') {
      return 'Enter category'
    }
    return 'Enter your todo'
  }

  render() {
    const style = {
      button: {
        margin: 12
      },
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      form: {
        display: "inline-block"
      }
    }

    return(
      <div style={style.container}>
        <form onSubmit={this.handleSubmit} style={style.form}>
          <TextField
            hintText={this.hintText()}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <RaisedButton
            label="Add"
            primary={true}
            style={style.button}
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default AddForm;
