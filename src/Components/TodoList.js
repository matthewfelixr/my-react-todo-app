import React from 'react'
import Header from './Header'
import ToDoItem from './TodoItem'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title.toUpperCase()} />
        <ul className="list-group list-group-flush">
            {props.items.map( ( item ) => {
                return (
                    <ToDoItem todoItem={item}/>
                )
            }
            )}
        </ul>
    </div>
  )
}

export default ToDoList