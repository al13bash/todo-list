let initialState = {
  todos: [
    {
      id: 0,
      title: "1st sdjfh",
      done: false,
      description: '',
      categoryId: 0
    },
    {
      id: 1,
      title: "2nd sdhjfk",
      done: false,
      description: '',
      categoryId: 0
    },
    {
      id: 2,
      title: "djsk sdhkf",
      done: false,
      description: '',
      categoryId: 1
    }
  ],
  categories: [
    {
      id: 0,
      name: "CAT 1",
      done: false,
      children: [{
        id: 2,
        name: "CAT 1-1",
        done: true,
        children:[{
          id: 4,
          name: "CAT 1-1-1",
          done: true,
          children:[]
        }]
      },
      {
        id: 3,
        name: "CAT 1-2",
        done: true,
        children:[]
      }]
    },
    {
      id: 1,
      name: "CAT 2",
      done: false,
      children:[]
    }
  ],
  displayedCategoryId: undefined,
  showDoneTodos: true,
  search: ''
}

const getNewCategory = (action) => {
  return {
    id: action.id,
    name: action.name,
    done: true,
    children: []
  }
}

const todo = (todo = {}, action, categoryId) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (todo.id !== action.id) {
        return todo;
      }
      return Object.assign({}, todo, { done: !todo.done});
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.text,
        done: false,
        description: '',
        categoryId: categoryId
      }
    case 'REMOVE_TODO':
      if(todo.categoryId === action.categoryId) {
        return false
      }
      return true
    case 'EDIT_TODO':
      if (todo.id === action.id) {
        return Object.assign({}, todo, {
          title: action.title,
          done: action.done,
          description: action.description,
        });
      }
      return todo
    case 'CHANGE_TODOS_CATEGORY':
      if (todo.id === action.todoId) {
        return Object.assign({}, todo, {
          categoryId: action.categoryId
        });
      }
    return todo
    default:
      return todo
  }
}

const category = (c = {}, action) => {
  switch(action.type) {
    case 'ADD_CATEGORY':
      if (c.id !== action.parentId) {
        return Object.assign({}, c, {
          children: c.children.map(elem => category(elem, action))
        })
      }
      return Object.assign({}, c, {
        children: [...c.children, getNewCategory(action)]
      })
    case 'REMOVE_CATEGORY':
      let result;
      c.children.forEach((child, index) => {
        if (child.id === action.id) {
          result = Object.assign({}, c, {
            children: [...c.children.slice(0, index), ...c.children.slice(index + 1)]
          })
        }
      })
      if(result === undefined) {
        result = Object.assign({}, c, {
          children: c.children.map((elem) => category(elem, action))
        })
      }
      return result
    case 'CHANGE_CATEGORY_NAME':
      if (c.id !== action.id) {
        return Object.assign({}, c, {
          children: c.children.map(elem => category(elem, action))
        })
      }
      return Object.assign({}, c, { name: action.name })
    case 'TRIGGER_TODO_CHECK':
      if (c.id !== action.categoryId) {
        return Object.assign({}, c, {
          children: c.children.map(elem => category(elem, action))
        })
      }
      return Object.assign({}, c, { done: action.done })
    default:
      return c
  }
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(t =>
          todo(t, action)
        )
      })
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [todo({}, action, state.displayedCategoryId), ...state.todos]
      })
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(t =>
          todo(t, action)
        )
      })
    case 'ADD_CATEGORY':
      if (action.isRoot) {
        return Object.assign({}, state, {
          categories : [getNewCategory(action), ...state.categories]
        })
      }
      return Object.assign({}, state, {
        categories: state.categories.map(c =>
          category(c, action)
        )
      })
    case 'CHANGE_CATEGORY_NAME':
      return Object.assign({}, state, {
        categories: state.categories.map(c =>
          category(c, action)
        )
      })
    case 'REMOVE_CATEGORY':
      for (let item of state.categories) {
        console.log(item.id, action.id);
        if (item.id === action.id) {
          return Object.assign({}, state, {
            categories: state.categories.filter(item => item.id !== action.id)
          })
        }
      }
      return Object.assign({}, state, {
        categories: state.categories.map(c =>
          category(c, action)
        )
      })
    case 'CHANGE_DISPLAYED_CATEGORY_ID':
      return Object.assign({}, state, {
        displayedCategoryId: action.id
      })
    case 'TRIGGER_TODO_CHECK':
      let isDone = {done: false};
      if (state.todos.filter(item => item.categoryId === state.displayedCategoryId)
        .every(item => item.done === true)) {
          isDone = Object.assign({}, isDone, {done: true});//
        }
      return Object.assign({}, state, {
         categories: state.categories.map(c =>
           category(c, Object.assign({}, action, isDone))
         )
       });
    case 'TOGGLE_VISIBILITY_FILTER':
      return Object.assign({}, state, { showDoneTodos: action.showDone });
    case 'UPDATE_SEARCH_REQUEST':
      return Object.assign({}, state, { search: action.text });
    case 'RESET_SEARCH':
      return Object.assign({}, state, { search: '' });
    case 'EDIT_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(t =>
          todo(t, action)
        )
      })
    case 'CHANGE_TODOS_CATEGORY':
      return Object.assign({}, state, {
        todos: state.todos.map(t =>
          todo(t, action)
        )
      })
    default:
      return state;
  }
}

export default todoApp;
