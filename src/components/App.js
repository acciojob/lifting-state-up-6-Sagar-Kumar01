
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

const handleComplete = (id) => {
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: true } : todo
  );

  
  const active = updatedTodos.filter(t => !t.completed);
  const completed = updatedTodos.filter(t => t.completed);

  setTodos([...active, ...completed]);
};
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
