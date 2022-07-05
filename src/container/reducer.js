export const initialState = {
  todos: [],
};

export const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id+1 : 1,
        text: action.text,
      };
      return {
        todos: [...state.todos, newTodo],
      };
    }
    case "EDIT_TODO": {
      const id = state.todos.findIndex((todo) => todo.id === action.id);
      const todo = Object.assign({}, state.todos[id]);
      todo.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(id, 1, todo);
      return {
        todos: todos,
      };
    }
    case "DELETE_TODO": {
      const id = state.todos.findIndex((todo) => todo.id === action.id);
      const todos = Object.assign([], state.todos);
      todos.splice(id, 1);
      return {
        todos: todos,
      };
    }
    default:
      return state;
  }
};
