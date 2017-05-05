import React from 'react';
import Paper from 'material-ui/Paper';
// import IconButton from 'material-ui/IconButton';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import ImageEdit from 'material-ui/svg-icons/image/edit';
import DialogFormContainer from '../../containers/DialogFormContainer';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      parentId: undefined,
      dialogType: undefined
    }

    this.toggleCategory = this.toggleCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.renderDialogForm = this.renderDialogForm.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog(e) {
    this.setState({
      openDialog: true,
      parentId: this.props.elem.id,
      dialogType: e.target.name
    });
  }

  closeDialog() {
    this.setState({openDialog: false});
  }

  toggleCategory() {
    this.props.changeDisplayedCategoryId(this.props.elem.id);
  }

  deleteCategory() {
    this.props.deleteNode(this.props.elem.id);
  }

  renderDialogForm() {
    return(
      <DialogFormContainer
        parentId={this.state.parentId}
        closeDialog={this.closeDialog}
        isOpen={this.state.openDialog}
        dialogType={this.state.dialogType}
        category={this.props.elem}
      />
    );
  }

  render() {
    const paper = {
      height: 40,
      width: 260,
      margin: "auto",
      display: "flex",
      alignItems:"center",
      justifyContent: "space-between",
      padding: 15
    }

    const button = {
      padding: 0
    }

    return(
      <div>
        <Paper
          style={paper}
          zDepth={1}>
          <Link
            to={{ pathname:'/', query: { categoryId: this.props.elem.id } }}
            onClick={this.toggleCategory}>
            {this.props.elem.name}
          </Link>
          <div>
            <button onClick={this.openDialog} name="edit">
              edit
            </button>
            <button onClick={this.deleteCategory}>
              del
            </button>
            <button onClick={this.openDialog} name="add">
              add
            </button>
          </div>
        </Paper>
        {this.state.openDialog && this.renderDialogForm()}
      </div>
    );
  }
}

export default Category;
