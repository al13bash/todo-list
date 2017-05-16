import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import './TodoItem.sass';

const TodoItem = (props) => {
  const handleClick = () => {
    props.toggleTodo(props.todo);
  };

  const redirectToEdit = () => {
    browserHistory.push(`/edit/${props.todo.id}`);
  };

  return (
    <Paper className="todo" zDepth={1} >
      <Checkbox
        label={props.todo.title}
        checked={props.todo.done}
        onCheck={handleClick}
        className="todo__checkbox"
      />
      <ImageEdit onClick={redirectToEdit}/>
    </Paper>
  );
};

export default TodoItem;
