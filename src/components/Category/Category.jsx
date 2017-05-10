import React from 'react';
import Paper from 'material-ui/Paper';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentReply from 'material-ui/svg-icons/content/reply';
import ImageEdit from 'material-ui/svg-icons/image/edit';
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
    this.renderDialogForm = this.renderDialogForm.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  changeCategory() {
    this.props.changeTodosCategory(this.props.elem.id, this.props.todoId);
  }

  openDialog(type, e) {
    this.setState({
      openDialog: true,
      parentId: this.props.elem.id,
      dialogType: type
    });
  }

  closeDialog() {
    this.setState({openDialog: false});
  }

  toggleCategory() {
    this.props.changeDisplayedCategoryId(this.props.elem.id);
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

  renderButtons() {
    if (!this.props.edit)
      return(
        <div>
          <ImageEdit onClick={this.openDialog.bind(this, 'edit')} />
          <ActionDelete onClick={this.openDialog.bind(this, 'delete')} />
          <ContentAdd onClick={this.openDialog.bind(this, 'add')} />
        </div>
      );
    else return(
      <div>
        <ContentReply onClick={this.changeCategory.bind(this)} />
      </div>
    );
  }

  render() {
    const paper = {
      height: 40,
      width: "100%",
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
          {this.renderButtons()}
        </Paper>
        {this.state.openDialog && this.renderDialogForm()}
      </div>
    );
  }
}

export default Category;
