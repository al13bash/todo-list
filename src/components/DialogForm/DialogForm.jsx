import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CategoryForm from '../CategoryForm/CategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const DialogForm = (props) => {

  var actions = [];

  const removeCategory = () => {
    props.removeCategory(props.category.id);
    props.closeDialog();
  }

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
            default: return
          }
        })()}
      </Dialog>
    </div>
  );
}

DialogForm.propTypes = {
  parentId: PropTypes.number.isRequired,
  closeDialog: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dialogType: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
    children: PropTypes.array
  }).isRequired,
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired
};

export default DialogForm;
