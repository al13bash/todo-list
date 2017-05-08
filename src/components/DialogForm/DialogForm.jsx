import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CategoryForm from '../CategoryForm/CategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const DialogForm = (props) => {

  var actions = [];
  const deleteConfirmation = () => {
    actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={removeCategory}
      />,
      <FlatButton
        label="Reject"
        primary={true}
        onTouchTap={props.closeDialog}
      />,
    ];
  }

  const removeCategory = () => {
    props.removeCategory(props.category.id);
    props.closeDialog();
  }

  return(
    <div>
      {props.dialogType === 'delete' && deleteConfirmation()}
      <Dialog
        modal={false}
        open={props.isOpen}
        actions={actions} >
        <NavigationClose onClick={props.closeDialog}/>
        {(() => {
          switch (props.dialogType) {
            case 'add':
              return(
                <CategoryForm
                  modal
                  parentId={props.parentId}
                  addCategory={props.addCategory}
                  closeDialog={props.closeDialog}
                />)
            case 'edit':
              return(
                <EditCategoryForm
                  editCategory={props.editCategory}
                  closeDialog={props.closeDialog}
                  category={props.category}
                />)
            case 'delete':
              return(<div>Delete?</div>)
          }
        })()}
      </Dialog>
    </div>
  );
}

export default DialogForm;
