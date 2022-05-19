import React, { useState } from 'react'
import TodoList from "./Components/TodoList";

function App(props) {

  const [items, setItems] = useState([])

  const title = 'Things to do';

  const addNewItem = (text) => {
    setItems( items => {
    const nextId = items.length + 1;
    const newItem = {
        id: nextId,
        text: text
    }
    return [...items,newItem]
    })
  }


  return (
    <div className="container">
      <div className="row">
        <TodoList items={items} title={title} addNewItem={addNewItem} />
      </div>
    </div>
  );
}

export default App;