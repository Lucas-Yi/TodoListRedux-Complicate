import React from "react";
import {connect} from "react-redux"
import {markAllComplete, clearCompleted, setStatusFilter, setColorFilter} from "../redux/actions"
import {StatusFilters, availableColors, capitalize} from "../constants"

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

const StatusFilter = ({statusFilter, onChange}) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === statusFilter ? 'selected' : ''
    return (
      <li key={value}>
        <button className={className} onClick={()=>onChange(value)}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}


const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  )
}

const Footer = ({remainingTodos, statusFilter, colorFilter, markAllComplete, clearCompleted, setStatusFilter, setColorFilter}) => {

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={markAllComplete}>
          Mark All Completed
        </button>
        <button className="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={remainingTodos} />
      <StatusFilter statusFilter={statusFilter} onChange={setStatusFilter}/>
      <ColorFilters value={colorFilter} onChange={setColorFilter} />
    </footer>
  );
};

const mapStateToProps = state=>{
  return {
    remainingTodos:[...state.todoList].filter(todoItem=>!todoItem.completed).length,
    statusFilter: state.statusFilter,
    colorFilter: state.colorFilter
  }
}

export default connect(mapStateToProps,{markAllComplete, clearCompleted, setStatusFilter, setColorFilter})(Footer);

