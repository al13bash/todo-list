import React from 'react';
import Dialog from 'material-ui/Dialog';
import CategoryForm from '../CategoryForm/CategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';


class DialogForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderAddForm = this.renderAddForm.bind(this);
    this.renderEditForm = this.renderEditForm.bind(this);
  }

  renderAddForm() {
    return(
      <CategoryForm
        modal
        parentId={this.props.parentId}
        addCategory={this.props.addCategory}
        handleCloseDialog={this.props.handleCloseDialog}
      />
    );
  }

  renderEditForm() {
    return(
      <EditCategoryForm
        editCategory={this.props.editCategory}
        handleCloseDialog={this.props.handleCloseDialog}
        category={this.props.category}
      />
    );
  }

  render() {
    return(
      <Dialog
        modal={false}
        open={this.props.isOpen} >
        {this.props.dialogType === 'add' ? this.renderAddForm() : this.renderEditForm() }
      </Dialog>
    );
  }
}

export default DialogForm;
