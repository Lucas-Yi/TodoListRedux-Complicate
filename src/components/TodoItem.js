import React from "react";
import {availableColors, capitalize} from "../constants"

const TodoItem = ({ todoItem, toggleSelect, setColor, deleteTodo }) => {

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input type="checkbox" checked={todoItem.completed} onChange={()=>toggleSelect(todoItem.id)}/>
        </div>
        <div className="todo-text">{todoItem.content}</div>
        <div className="segment buttons">
          <select className="colorPicker" value={todoItem.color} style={{ color:todoItem.color }} onChange={(e)=>setColor(todoItem.id, e.target.value)}>
            <option value=""></option>
            {colorOptions}
          </select>
        </div>
        <button className="destroy" onClick={()=>deleteTodo(todoItem.id)}>X</button>
      </div>
    </li>
  );
};

export default TodoItem;
