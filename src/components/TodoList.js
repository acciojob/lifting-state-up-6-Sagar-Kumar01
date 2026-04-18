import React from "react";
const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((val) => (
          <li key={val.id}>
            <span>{val.text}</span>
            {!val.completed && (
              <button onClick={() => handleComplete(val.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList
