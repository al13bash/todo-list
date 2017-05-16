import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class TodoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title,
      done: this.props.todo.done,
      description: this.props.todo.description,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCheck() {
    this.setState({ done: !this.state.done });
  }

  saveChanges(e) {
    e.preventDefault();
    this.props.editTodo(this.props.todo.id, this.state);
    this.cancel();
  }

  cancel() {
    browserHistory.push(`/category/${this.props.displayedCategoryId}?showDone=${this.props.showDone}`);
  }

  render() {
    return (
      <form>
        <div>
          <RaisedButton onClick={this.saveChanges} primary={true} label="Save changes" />
          <RaisedButton onClick={this.cancel} label="Cancel" />
        </div>
        <TextField
          floatingLabelText="Title"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <Checkbox
          label="Done"
          checked={this.state.done}
          onCheck={this.handleCheck}
        />
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          fullWidth={true}
          rowsMax={5}
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />
      </form>
    );
  }
}

TodoEditForm.propTypes = {
  todoelem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  displayedCategoryId: PropTypes.number.isRequired,
  showDone: PropTypes.bool.isRequired,
};

export default TodoEditForm;
