import React from "react";

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
  <div>
    <h2>{props.ele.name}</h2>
    <button onClick={() => handleEdit(props.ele.id)} >EDIT</button>
        <button onClick={() => handleDelete(props.ele.id)} >DELETE</button>
  </div>
    )
};

export default Todo;
