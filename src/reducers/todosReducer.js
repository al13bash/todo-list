export const todosInitialState = [
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
]


const todos = (state = todosInitialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { done: !todo.done});
        }
        return todo
      })      
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          title: action.text,
          done: false,
          description: '',
          categoryId: action.categoryId
        }, ...state]
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            title: action.title,
            done: action.done,
            description: action.description,
          });
        }
        return todo
      })
    case 'CHANGE_TODOS_CATEGORY':
      return state.map(todo => {
        if (todo.id === action.todoId) {
          return Object.assign({}, todo, {
            categoryId: action.categoryId
          });
        }
        return todo
      })
    default:
      return state
  }
}

export default todos;
