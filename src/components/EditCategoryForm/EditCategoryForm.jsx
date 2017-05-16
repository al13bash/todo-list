import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeDialog();
    this.props.editCategory(this.props.category.id, this.state.value);
    this.setState({ value: '' });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const container = {
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <div style={container}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            defaultValue={this.props.category.name}
            floatingLabelText="Edit Category Name"
            onChange={this.handleChange}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            type="submit" />
        </form>
      </div>
    );
  }
}

EditCategoryForm.propTypes = {
  editCategory: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
    children: PropTypes.array,
  }).isRequired,
};

export default EditCategoryForm;
