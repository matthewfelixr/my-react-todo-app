import ToDoList from "./Components/TodoList";

function App() {

  const items = [
    {
     id: 1,
     text: 'Membuang sampah',
     completed: false
   },
   {
     id: 2,
     text: 'Membuat rotu',
     completed: false
   },
   {
     id: 3,
     text: 'Belajar React',
     completed: false
   }
 ];

 const title = 'Things to do';


  return (
    <div className="container">
      <div className="row">
        <ToDoList items={items} title={title} />
      </div>
    </div>
  );
}

export default App;