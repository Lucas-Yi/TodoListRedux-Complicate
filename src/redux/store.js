import { createStore } from "redux";
import {StatusFilters} from "../constants"
import {
  ADD_TODO,
  TOGGLE_SELECTED,
  SET_COLOR,
  DELETE_TODO,
  MARK_ALL_COMPLETE,
  CLEAR_COMPLETED,
  SET_STATUS_FILTER,
  SET_COLOR_FILTER
} from "./actionType";

const initState = {
  todoList: [],
  statusFilter: StatusFilters.All,
  colorFilter: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id, content, completed: false, color: null }
        ]
      };
    }
    case TOGGLE_SELECTED: {
      const { id } = action.payload;
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.completed = !todoItem.completed;
            return todoItem;
          }
          return todoItem;
        })
      }
    }
    case SET_COLOR: {
      const { id, color } = action.payload;
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.color = color;
            return todoItem;
          }
          return todoItem;
        })
      }
      
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todoList:state.todoList.filter((todoItem) => todoItem.id !== id)
      }
    }
    case MARK_ALL_COMPLETE:{
      return {
        ...state,
        todoList:state.todoList.map(todoItem=>{
          todoItem.completed = true
          return todoItem
        })
      }
    }
    case CLEAR_COMPLETED:{
      return {
        ...state,
        todoList:state.todoList.filter((todoItem)=> todoItem.completed !== true)
      }
    }
    case SET_STATUS_FILTER:{
      const {filter} = action.payload
      return {
        ...state,
        statusFilter: filter
      }
    }
    case SET_COLOR_FILTER:{
      const {filter, changeType} = action.payload
      if(changeType === 'removed'){
        return {
          ...state,
          colorFilter: state.colorFilter.filter(colorItem=> colorItem !== filter)
        }
      }else{
        return {
          ...state,
          colorFilter: [...state.colorFilter, filter]
        }
      }
    }
    default:
      return state;
  }
};

export default createStore(reducer);
