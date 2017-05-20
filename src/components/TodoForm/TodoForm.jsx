/* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentWillReceiveProps"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../CategoryForm/CategoryForm.sass';

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
    if (this.state.value !== '') {
      this.props.addTodo(this.state.value, this.props.displayedCategoryId);
      this.setState({ value: '' });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  renderTodoForm() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form_container">
        <TextField
          hintText='Enter your todo'
          value={this.state.value}
          onChange={this.handleChange}
          className="input"
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
    return (
      <div>
        {
          this.props.displayedCategoryId !== undefined &&
          !isNaN(this.props.displayedCategoryId) &&
          this.renderTodoForm()
        }
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  displayedCategoryId: PropTypes.number,
};

export default TodoForm;
