import React, {useState} from "react";
import './style.css'
import * as MD from 'react-icons/md'
import * as TB from 'react-icons/tb'
import * as VSC from 'react-icons/vsc'
import * as IO from 'react-icons/io'

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <React.Fragment> 
      {mode === "list"
        ? <li className="todo">
            <span><IO.IoIosRadioButtonOn /></span>
            <span className="TodoText">{todo.text}</span>
            <span title="Edit Todo" className="EditTodo" onClick={() => setMode("edit")}><TB.TbEdit /></span>
            <span title="Delete Todo" className="RemoveTodo" onClick={remove}><MD.MdDeleteForever /></span>
        </li>
        : <li className="overlap">
            <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
            <span className="EditTodoSave" onClick={() => {edit(text); setMode("list")}}>
              <VSC.VscSaveAs />
            </span>
            <span className="EditTodoCancel" onClick={() => setMode("list")}>
              <MD.MdCancel />
            </span>
        </li>}
    </React.Fragment>
  );
}

export default Todo;