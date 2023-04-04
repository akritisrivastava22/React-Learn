import React from "react";
import "./App.css";

const Todo = (props) => {
    function handleEdit(id){
        const var1 = prompt("Edit your Todo");
        let var2 = [...props.data];
        var2.forEach((element, index, a) => {
          if( element.id === id){
            a[index].name = var1;
          }
        });
        props.setData(var2);
      }
    
      function handleDelete(id){
        let var2 = [...props.data];
        let index = -1;
        var2.forEach((element, ind) => {
          if( element.id === id){
            index = ind;
          }
        });
        var2.splice(index,1);
        props.setData(var2);
      }
    return(
  <div className="flex justify-center my-4">
    <h2 className="h-18 w-96 text-2xl border-2 rounded-sm border-black border-opacity-50 outline-none  mr-5 ml-12 bg-cyan-50 text-black">{props.ele.name}</h2>
    <div>
    <button onClick={() => handleEdit(props.ele.id)} className="border-black border-2 px-5 py-1 hover:bg-black hover:text-white" >EDIT</button>
        <button onClick={() => handleDelete(props.ele.id)} className="ml-5 border-black border-2 px-5 py-1 hover:bg-black hover:text-white">DELETE</button>
  </div></div>
    )
};

export default Todo;
