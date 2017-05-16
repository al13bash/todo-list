import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderTodoForm = this.renderTodoForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.value, this.props.displayedCategoryId);
    this.setState({ value: '' });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  renderTodoForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText='Enter your todo'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <RaisedButton
          label="Add"
          primary={true}
          type="submit"
        />
      </form>
    );
  }

  render() {
    const container = {
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <div style={container}>
        { this.props.displayedCategoryId !== undefined && this.renderTodoForm() }
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  displayedCategoryId: PropTypes.number,
};

export default TodoForm;
