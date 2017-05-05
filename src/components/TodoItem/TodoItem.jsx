import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import IconButton from 'material-ui/IconButton';
// import ImageEdit from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import './TodoItem.css';

const TodoItem = (props) => {

  const handleClick = e => {
    props.toggleTodo(Number(e.target.id));
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
        id={props.todo.id}
        style={style.checkbox}
        label={props.todo.title}
        checked={props.todo.done}
        onCheck={handleClick}
      />
      <button name="edit">
        edit
      </button>
    </Paper>
  );
}

export default TodoItem;
