import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      paper: {
        height: 65,
        width: 600,
        margin: "auto",
        display: "flex",
        alignItems:"center",
        justifyContent: "space-between",
        padding: 15
      },
      checkbox: {
        width: "90%"
      },
    };

    return(
      <Paper style={style.paper} zDepth={1} >
        <Checkbox
          id={this.props.todo.id}
          style={style.checkbox}
          label={this.props.todo.title}
          checked={this.props.todo.done}
          onCheck={this.props.toggleCheckbox}
        />
        <IconButton>
          <ImageEdit />
        </IconButton>
      </Paper>
      // <TableRow {...otherProps} className="todo-list_row">
      //   {otherProps.children[0]}
      //   <TableRowColumn>{element.title}</TableRowColumn>
      //   <TableRowColumn width={30}>
      //     <IconButton>
      //       <ImageEdit />
      //     </IconButton>
      //   </TableRowColumn>
      // </TableRow>
    );
  }
}

/* <Card className="todo-item">
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
</Card> */

export default TodoItem;
