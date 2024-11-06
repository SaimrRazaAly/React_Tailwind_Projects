import React, { useEffect, useState } from "react";
import TodoForm from "./Todo_Form";
import TodoItem from "./Todo_Item";
import { TodoProvider } from "./Todo-context/TodoContext";

const Final_Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const UpdateTodo = (id, todo) => {
    setTodos((perv) =>
      perv.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const DelTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const CheckTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, Checked: !prevTodo.Checked }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  // useEffect(() => {
  //   JSON.stringify(localStorage.setItem(todos));
  // }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider value={{ addTodo, DelTodo, CheckTodo, UpdateTodo, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Final_Todo;
