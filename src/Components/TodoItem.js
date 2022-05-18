import React from 'react'

const ToDoItem = (props) => {
  return (
    <li className="list-group-item">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="todo-item-check-1" />
            <label className="form-check-label" htmlFor="todo-item-check-1">{props.todoItem.text}</label>
        </div>
    </li>
  )
}

export default ToDoItem