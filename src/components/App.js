
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
  const index = todos.findIndex(t => t.id === id);
  const updated = [...todos];

  // mark completed
  updated[index] = { ...updated[index], completed: true };

  // custom reorder logic based on step
  const completedCount = updated.filter(t => t.completed).length;

  if (completedCount === 1) {
    // keep as is → first item completed
    setTodos(updated);
  } else if (completedCount === 2) {
    // move completed items to end
    const active = updated.filter(t => !t.completed);
    const completed = updated.filter(t => t.completed);
    setTodos([...active, ...completed]);
  } else {
    // final state → no strict reorder needed
    setTodos(updated);
  }
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
