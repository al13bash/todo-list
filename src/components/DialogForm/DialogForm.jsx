import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CategoryForm from '../CategoryForm/CategoryForm.jsx';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm.jsx';
import './DialogForm.sass';

const DialogForm = (props) => {
  let actions = [];

  const removeCategory = () => {
    props.removeCategory(props.category.id);
    props.closeDialog();

    const location = Object.assign({}, browserHistory.getCurrentLocation());
    location.pathname = '/';
    Object.assign(location.query, { showDone: props.showDoneTodos });
    browserHistory.push(location);
  };

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
  };

  return (
    <div>
      {props.dialogType === 'delete' && deleteConfirmation()}
      <Dialog
        modal={false}
        open={props.isOpen}
        actions={actions}
        contentStyle={{ width: 450 }}
      >
        <NavigationClose
          onClick={props.closeDialog}
          className="close_button"
        />
        {(() => {
          switch (props.dialogType) {
            case 'add':
              return (
                <CategoryForm
                  modal
                  parentId={props.parentId}
                  addCategory={props.addCategory}
                  closeDialog={props.closeDialog}
                />);
            case 'edit':
              return (
                <EditCategoryForm
                  editCategory={props.editCategory}
                  closeDialog={props.closeDialog}
                  category={props.category}
                />);
            case 'delete':
              return (<div>Delete?</div>);
            default:
          }
          return undefined;
        })()}
      </Dialog>
    </div>
  );
};

DialogForm.propTypes = {
  parentId: PropTypes.number.isRequired,
  closeDialog: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dialogType: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
    children: PropTypes.array,
  }).isRequired,
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
  showDoneTodos: PropTypes.bool.isRequired,
};

export default DialogForm;
