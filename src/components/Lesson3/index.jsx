import React, { useState, useCallback, useMemo } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: newTodo, completed: false }
      ]);
      setNewTodo("");
    }
  }, [newTodo]);

  const toggleTodoCompletion = useCallback((index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const visibleTodos = useMemo(() => {
    console.log("Filtering todos...");
    return showCompleted ? todos : todos.filter((todo) => !todo.completed);
  }, [todos, showCompleted]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <div>
        <label>
          Show Completed
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted((prev) => !prev)}
          />
        </label>
      </div>

      <ul>
        {visibleTodos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
