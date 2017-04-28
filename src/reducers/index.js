let initialState = [
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

const todoApp = (state = initialState, action) => {
  console.log("REDUCER", state, action);
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, { done: !todo.done});
      })
    default:
      return state
  }
}

export default todoApp;
