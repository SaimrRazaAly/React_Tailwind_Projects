import React, { useState } from "react";
import Todo_List from "./Todo_List";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  function SaveTodo(event) {
    let todoData = event.target.todo.value;
    console.log(todoData);
    if (!todo.includes(todoData)) {
      let finalData = [...todo, todoData];
      setTodo(finalData);
      console.log(finalData)
    } else {
      alert("the todo already exsixt....");
    }
    
    event.preventDefault();
    event.target.todo.value = null;
  }
  let ShowData = todo.map((v, i) => {
    return (
      <Todo_List key={i} v={v} indexnumber={i} todo={todo} setTodo={setTodo} />
    );
  });
  return (
    <div className="mx-5  my-2">
      <h2 className="text-center text-2xl">Todo</h2>
      <form onSubmit={SaveTodo} className="flex -mx-5">
        <input type="text" name="todo" placeholder="Enter a todo"  className="mt-1 block w-[80%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     "/>
     <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
    Add Task
  </button>
      </form>
      <ul>{ShowData}</ul>
    </div>
  );
};

export default Todo;
