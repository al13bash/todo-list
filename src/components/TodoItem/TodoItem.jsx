import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.toggleTodo(parseInt(e.target.id));
  }

  render() {
    const style = {
      paper: {
        height: 50,
        width: 450,
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
          onCheck={this.handleClick}
        />
        <IconButton>
          <ImageEdit />
        </IconButton>
      </Paper>
    );
  }
}

export default TodoItem;
