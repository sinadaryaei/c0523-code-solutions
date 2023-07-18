import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        if (response.ok) {
          const todosData = await response.json();
          setTodos(todosData);
        } else {
          throw new Error(response.status);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      if (response.ok) {
        const newTodoData = await response.json();
        setTodos((prevTodos) => [...prevTodos, newTodoData]);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleToggleCompleted = async (todoId) => {
    try {
      const todoIndex = todos.findIndex((todo) => todo.todoId === todoId);
      const currentStatus = todos[todoIndex].isCompleted;
      const updatedStatus = !currentStatus;

      const updatedTodo = {
        ...todos[todoIndex],
        isCompleted: updatedStatus,
      };

      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
      if (response.ok) {
        const updatedTodos = todos.map((todo, index) =>
          index !== todoIndex ? todo : updatedTodo
        );
        setTodos(updatedTodos);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      setError(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={handleAddTodo} />
          <TodoList todos={todos} toggleCompleted={handleToggleCompleted} />
        </div>
      </div>
    </div>
  );
}
