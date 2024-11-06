import { useContext, createContext } from "react";

export const  TodoContext = createContext({
  todos: [
    {
      id: 1,
      Todo_Title: "A new day",
      Checked: false,
    },
  ],
  addTodo: (todo) => {},
  DelTodo: (id) => {},
  UpdateTodo: (todo, id) => {},
  CheckTodo: (id) => {},
});


export const useTodo =()=>{
    return useContext(TodoContext)
} 

export const TodoProvider = TodoContext.Provider
