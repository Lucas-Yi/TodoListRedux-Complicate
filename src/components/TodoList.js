import React from "react";
import TodoItem from "./TodoItem";
import {toggleSelect, setColor,deleteTodo} from "../redux/actions"
import { connect } from "react-redux";
import {StatusFilters} from "../constants"

const TodoList = ({ todoList, toggleSelect, setColor, deleteTodo }) => {
  return <ul className="todo-list">
    {todoList.map((todoItem) => 
      <TodoItem 
        todoItem={todoItem} 
        key={todoItem.id} 
        toggleSelect={toggleSelect}
        setColor={setColor}
        deleteTodo={deleteTodo}/>)}
  </ul>
};

const mapStateToProps = (state) => ({todoList: getColorFilteredList(getStatusFilteredList(state.todoList, state.statusFilter), state.colorFilter)});

const getStatusFilteredList = (list, statusFilter)=>{
  switch(statusFilter){
    case StatusFilters.All:{
      return list
    }
    case StatusFilters.Active:{
      return list.filter(todoItem=>!todoItem.completed)
    }
    case StatusFilters.Completed:{
      return list.filter(todoItem=>todoItem.completed)
    }
    default:
      return list
  }
}

const getColorFilteredList = (list, colorFilter)=>{
  if(colorFilter.length < 1) 
    return list
  return list.filter(todoItem=> colorFilter.includes(todoItem.color))
}

export default connect(mapStateToProps, {toggleSelect,setColor, deleteTodo})(TodoList);
