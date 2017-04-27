import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemList.css';

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "1st sdjfh",
          done: true
        },
        {
          id: 2,
          title: "2nd sdhjfk",
          done: false
        },
        {
          id: 3,
          title: "djsk sdhkf",
          done: true
        }
      ]
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(event) {
    console.log(event.target.id);
  }

  render() {
    return(
      <div>
        {this.state.todos.map((elem, index) =>
          <TodoItem key={ elem.id } todo={ elem } toggleCheckbox={ this.toggleCheckbox }></TodoItem>
        )}
      </div>
    );
  }
}

export default TodoItemList;
