import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './CategoryForm.sass';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.modal) {
      this.props.closeDialog();
      if (this.state.value !== '') {
        this.props.addCategory(this.state.value, +this.props.parentId, false);
      }
    } else if (this.state.value !== '' && !this.props.modal) {
      this.props.addCategory(this.state.value, undefined, true);
    }
    this.setState({ value: '' });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form_container">
        <TextField
          hintText='Enter category'
          value={this.state.value}
          onChange={this.handleChange}
          className="input"
        />
        <RaisedButton
          label="Add"
          primary={true}
          type="submit" />
      </form>
    );
  }
}

CategoryForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  parentId: PropTypes.number,
  closeDialog: PropTypes.func,
};

export default CategoryForm;
