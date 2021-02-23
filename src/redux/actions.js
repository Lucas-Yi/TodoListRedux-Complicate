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

let nextTodoID = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoID++,
    content
  }
});

export const toggleSelect = (id) => ({
  type: TOGGLE_SELECTED,
  payload: {
    id
  }
});

export const setColor = (id, color) => ({
  type: SET_COLOR,
  payload: {
    color,
    id
  }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const markAllComplete = ()=>({
  type: MARK_ALL_COMPLETE
})

export const clearCompleted = ()=>({
  type: CLEAR_COMPLETED
})

export const setStatusFilter = (filter)=>({
  type: SET_STATUS_FILTER,
  payload:{
    filter
  }
})

export const setColorFilter = (filter, changeType)=>({
  type: SET_COLOR_FILTER,
  payload:{
    filter,
    changeType,
  }
})