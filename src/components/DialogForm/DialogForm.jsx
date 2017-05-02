import React from 'react';
import Dialog from 'material-ui/Dialog';
import CategoryForm from '../CategoryForm/CategoryForm';

class DialogForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Dialog
        title="Add nested category"
        modal={false}
        open={this.props.isOpen}
        // contentStyle={customContentStyle}
        >
        <CategoryForm
          modal
          parentId={this.props.parentId}
          addCategory={this.props.addCategory}
          handleCloseDialog={this.props.handleCloseDialog}
        />
      </Dialog>
    );
  }
}

export default DialogForm;
