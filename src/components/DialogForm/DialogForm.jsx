import React from 'react';
import Dialog from 'material-ui/Dialog';
import CategoryForm from '../CategoryForm/CategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const DialogForm = (props) => {
  return(
    <Dialog
      modal={false}
      open={props.isOpen} >
      <NavigationClose onClick={props.closeDialog}/>
      {props.dialogType === 'add' ?
      (
        <CategoryForm
          modal
          parentId={props.parentId}
          addCategory={props.addCategory}
          closeDialog={props.closeDialog}
        />
      ) : (
        <EditCategoryForm
          editCategory={props.editCategory}
          closeDialog={props.closeDialog}
          category={props.category}
        />
      )}
    </Dialog>
  );
}

export default DialogForm;
