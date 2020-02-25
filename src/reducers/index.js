import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    // return Object.assign({}, state, {
    //   todos: state.todos.concat(action.todo)
    return {
      ...state,
      todos: [...state.todos, action.todo]
    };
    // });
  } else if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id)
    };
  } else if (action.type === CHECK_TODO) {
    return {
      ...state,
      todos: state.todos.map(todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    };
  }

  return state;
}

export default rootReducer;
