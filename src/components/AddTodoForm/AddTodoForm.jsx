import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({value: ''});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
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
            hintText="Enter your todo"
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

export default AddTodoForm;
