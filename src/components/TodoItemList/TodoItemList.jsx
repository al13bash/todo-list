import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemList.css';

const TodoItemList = (props) => {
  const showDoneFilter = todo => (props.showDoneTodos || (!props.showDoneTodos && !todo.done))

  const categoryFilter = todo => (props.displayedCategoryId === undefined || todo.categoryId === props.displayedCategoryId)

  return(
    <div>
      {props.todos.map( todo => {
        if (categoryFilter(todo) && showDoneFilter(todo)) {
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
