import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DialogFormContainer from '../../containers/DialogFormContainer';
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

    this.openDialog = this.openDialog.bind(this);
    this.renderDialogForm = this.renderDialogForm.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog(e) {
    console.log(this);
    this.setState({
      openDialog: true,
      parentId: this.props.elem.id,
      dialogType: e.target.name
    });
  }

  closeDialog() {
    this.setState({openDialog: false});
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
          zDepth={1}
          id={this.props.elem.id}
          onClick={this.props.changeDisplayedCategoryId}>
          {this.props.elem.name}
          <div>
            <button onClick={this.openDialog} name="edit">
              edit
            </button>
            <button onClick={this.props.deleteNode} id={this.props.elem.id}>
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
