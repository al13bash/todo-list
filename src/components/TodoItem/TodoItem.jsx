import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import IconButton from 'material-ui/IconButton';
// import ImageEdit from 'material-ui/svg-icons/image/edit';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import './TodoItem.css';

const TodoItem = (props) => {

  const handleClick = e => {
    props.toggleTodo(props.todo);
  }

  const style = {
    paper: {
      height: 50,
      width: 340,
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
        style={style.checkbox}
        label={props.todo.title}
        checked={props.todo.done}
        onCheck={handleClick}
      />
      <Link to={`/edit/${props.todo.id}`}>edit</Link>
    </Paper>
  );
}

export default TodoItem;
