import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem.jsx';

const TodoItemList = (props) => {
  const showDoneFilter = todo => (props.showDoneTodos || (!props.showDoneTodos && !todo.done));

  const categoryFilter = todo => (props.displayedCategoryId === undefined
    || todo.categoryId === props.displayedCategoryId);

  const searchFilter = () => {
    let searchString = '';
    let todosList = [];
    if (props.search !== undefined && props.search.length > 0) {
      searchString = props.search.trim().toLowerCase();
      todosList = props.todos.filter(item => item.title.toLowerCase().match(searchString));
    } else return props.todos;
    return todosList;
  };

  return (
    <div>
      {searchFilter().filter(todo => categoryFilter(todo) && showDoneFilter(todo))
        .map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={props.toggleTodo}
          />,
        )}
    </div>
  );
};

TodoItemList.propTypes = {
  todos: PropTypes.array.isRequired,
  displayedCategoryId: PropTypes.number,
  showDoneTodos: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItemList;
