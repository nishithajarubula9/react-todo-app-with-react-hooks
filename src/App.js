import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css';
 
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

useEffect(() => {
  getLocalTodos();
}, []);

 useEffect(() => {
   filterHandler();
   saveLocalTodos();

 }, [todos, status]);

  const filterHandler = () => {
    switch(status){
     case 'completed':
       setFilteredTodos(todos.filter(todo => todo.completed === true))
       break;
       case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
       break;
       default: 
       setFilteredTodos(todos);
       break;

  }
}

// save to local

const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}


const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
   const todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
   setTodos(todoLocal);
  }
}
  return (
    <div className="App">
      <header>
  <h1>Nish's Todo List {inputText} </h1>
        <Form inputText={inputText} todos={todos} setTodos={setTodos}setInputText={setInputText}
        setStatus={setStatus}/>
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </header>
      
    </div>
  );
}

export default App;
