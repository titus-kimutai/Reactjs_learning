import { ACTIONS } from "../actions/actions";

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, createTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    default:
      return todos;
  }
};

const createTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};
