import React from 'react';
import Paper from 'material-ui/Paper';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentReply from 'material-ui/svg-icons/content/reply';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import DialogFormContainer from '../../containers/DialogFormContainer';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {browserHistory} from 'react-router';
import classNames from 'classnames';
import './Category.sass';
injectTapEventPlugin();

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      parentId: undefined,
      dialogType: undefined,
      focused: false
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

  toggleCategory(e) {
    browserHistory.push(`/category/${this.props.elem.id}`);
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
        <div className="category__actions">
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
    var categoryClasses = classNames({
      'category': true,
      'focused': this.props.displayedCategoryId === this.props.elem.id,
      'done': this.props.elem.done
    });
    return(
      <div>
        <Paper
          zDepth={1}
          onClick={this.toggleCategory}
          className={categoryClasses}
        >
          <div className="category__name">{this.props.elem.name}</div>
          {this.renderButtons()}
        </Paper>
        {this.state.openDialog && this.renderDialogForm()}
      </div>
    );
  }
}

export default Category;
