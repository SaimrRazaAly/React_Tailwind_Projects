import { useState } from "react";
import { useTodo } from "./Todo-context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { DelTodo, CheckTodo, UpdateTodo } = useTodo();

  const editTodo = () => {
    UpdateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const handleCheckTodo = () => {
    CheckTodo(todo.id);
  };
 
  
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm
         shadow-white/50 duration-300  text-black ${
        todo.Checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.CheckTodo}
        onChange={handleCheckTodo}
      />
      { console.log(todo.CheckTodo)}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.Checked ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.CheckTodo) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.CheckTodo}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => DelTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
