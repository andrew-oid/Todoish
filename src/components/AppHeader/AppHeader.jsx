import React, { useState } from "react";
import './style.css';

const AppHeader = ({ add }) => {
  const [text, setText] = useState("");
  return (
    <div className="TodoList">
      <section className="TodoHeader">
        <h2>TODOISH</h2>
      </section>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="TodoListInput"
      />
      <span
        className="TodoListButton"
        onClick={() => {
          text && add(text);
          setText("");
        }}>
        Add
      </span>
    </div>
  );
};

export default AppHeader;
