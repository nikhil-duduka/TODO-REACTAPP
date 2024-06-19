import React, { useState, useEffect } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  //useeffect hook to send request only once 
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <div>
      <CreateTodo></CreateTodo>
     {/* <Todos todos = {[{"title": "clg","description": "not going tom","completed": false}]}/> */}
     <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
