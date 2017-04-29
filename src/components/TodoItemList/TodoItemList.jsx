import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemList.css';

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.todos.map((todo, index) =>
          <TodoItem
            key={ index }
            todo={ todo }
            toggleTodo={ this.props.toggleTodo }></TodoItem>
        )}
      </div>
    );
  }
}

export default TodoItemList;
