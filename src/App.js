// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";


function App() {
  const [mytodos, setMyTodos] = useState([]);
 
  //view all todos by fetching from the database
  //set todos to a state variable

useEffect(() => {
  fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(data => setMyTodos((mytodos) => data))
  }, [])

  const todoList = mytodos.map((elem,index)=> {
    return (<Todo 
      key={index}
      tasks={elem.tasks}
      duedate={elem.duedate}
      category={elem.category}
    />)
  })

  function renderNewTask (data) {
    let newTask  = [...mytodos, data]
    setMyTodos((mytodos) => newTask)

  }

  return (
    <>
      <h1>Enter a new task</h1>
      <Todoform getTask={renderNewTask}/>
      <h1>Hello</h1>
      <>{todoList}</>
      
    </>
  );
}

export default App;
