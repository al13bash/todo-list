import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemList.css';

const TodoItemList = (props) => {
  return(
    <div>
      {props.todos.map( todo => {
        if (props.displayedCategoryId === undefined || todo.categoryId === props.displayedCategoryId) {
          return(
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={props.toggleTodo}
            />
          )
        }
      })}
    </div>
  );
}

export default TodoItemList;
