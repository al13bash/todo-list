import React from 'react';
import Dialog from 'material-ui/Dialog';
import CategoryForm from '../CategoryForm/CategoryForm';

class DialogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleCloseDialog() {
    this.setState({ open: false });
  }

  render() {
    return(
      <Dialog
        title="Add nested category"
        modal={false}
        open={this.state.open}
        onRequestClose={this.props.handleCloseDialog}
        // contentStyle={customContentStyle}
        >
        <CategoryForm
          modal
          parentId={this.props.parentId}
          addCategory={this.props.addCategory}
          handleCloseDialog={this.handleCloseDialog}
        />
      </Dialog>
    );
  }
}

export default DialogForm;
