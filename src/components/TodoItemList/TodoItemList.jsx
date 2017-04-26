import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const todos = [
  {
    title: "1st sdjfh"
  },
  {
    title: "2nd sdhjfk"
  },
  {
    title: "djsk sdhkf"
  }];

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {todos.map((elem, index) =>
          <TodoItem key={ index } title={ elem.title }></TodoItem>
        )}
      </div>
    );
  }
}

export default TodoItemList;
