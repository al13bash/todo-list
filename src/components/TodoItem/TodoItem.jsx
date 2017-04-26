import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card className="todo-item">
        <Checkbox className="todo-item__checkbox"/>
        <CardHeader>
          {this.props.title}
        </CardHeader>
        <IconButton
          className="todo-item__edit"
          tooltip="Edit"
          tooltipPosition="top-center">
          <ImageEdit />
        </IconButton>
      </Card>
    );
  }
}

export default TodoItem;
