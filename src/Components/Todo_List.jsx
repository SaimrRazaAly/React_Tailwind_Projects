import React from "react";

const Todo_List = ({ v, i, indexnumber, todo, setTodo }) => {
  function delTodo() {
    let remaningData = todo.filter((v,i) => i != indexnumber);
    setTodo(remaningData);
  }
  function editTodo() {
    let newData = todo.map((v,i)=>{
      if(i===indexnumber){
        let newValue = prompt("Edit the todo",v)
    return newValue;
      
      }
      return v;
      
    });
    setTodo(newData)
    console.log(newData)

  }
  return (
    <li className="p-5">
      {v} <button onClick={editTodo} class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out mr-2">
    Edit
  </button>

  <button onClick={delTodo} class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out">
    Delete
  </button>
    </li>
  );
};

export default Todo_List;
