const initailState = [{
  id:'123',
  text: 'Already Added ',
  completed: false
},{
  id:'123',
  text: 'Second',
  completed: false
}
]


const todos = (state = initailState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
