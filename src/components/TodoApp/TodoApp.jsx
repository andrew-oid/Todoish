import React, { useReducer } from "react";
import { initialState, reducer } from "../.././container/reducer";
import AppHeader from "../AppHeader";
import Todo from "../Todo";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <AppHeader add={(text) => dispatch({ type: "ADD_TODO", text: text })} />

      <ul>
      {state.todos.length > 0 ? (
        state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              remove={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
              edit={(text) => dispatch({ type: "EDIT_TODO", id: todo.id, text: text })} 
            />
          );
        })
      ) : (
        <div className="EmptyTodoList">
          <h3>No Todos Available</h3>
        </div>
      )}
      </ul>

    </React.Fragment>
  );
};
export default TodoApp;
