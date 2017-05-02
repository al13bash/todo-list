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
    console.log("qwert", this.props.elem.id);
    this.state = {
      openDialog: false,
      parentId: undefined
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.renderDialogForm = this.renderDialogForm.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog(e) {
    this.setState({
      openDialog: true,
      parentId: e.target.id
    });
  }

  handleCloseDialog() {
    this.setState({openDialog: false});
  }

  renderDialogForm() {
    return(
      <DialogFormContainer
        parentId={this.state.parentId}
        handleCloseDialog={this.handleCloseDialog}
        isOpen={this.state.openDialog}
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
        <Paper style={paper} zDepth={1} >
          <div>{this.props.elem.name}</div>
          <div>
            {/* <IconButton
              id={this.props.elem.id}
              style={button}
              onTouchTap={this.handlertr}>
              <ActionDelete id={this.props.elem.id}/>
            </IconButton> */}
            <button
              id={this.props.elem.id}
              onClick={this.props.deleteNode}
            > del </button>
            <button
              id={this.props.elem.id}
              onClick={this.handleOpenDialog}
            > add </button>
            {/* <IconButton
              id={this.props.elem.id}
              style={button}
              onTouchTap={this.handleOpenDialog}>
              <ContentAdd id={this.props.elem.id}/>
            </IconButton> */}
          </div>
        </Paper>
        {this.state.openDialog && this.renderDialogForm()}
      </div>
    );
  }
}

export default Category;
