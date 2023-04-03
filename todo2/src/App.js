import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { v4 } from "uuid";
import Todo from "./Todo";

function App() {
  const [data, setData] = useState([]);

  function addTodo(todo) {
    let var1 = [...data, { id: v4(), name: todo }];
    console.log(var1);
    setData(var1);
  }

  return (
    <>
      <SearchBar addTodo={addTodo} />
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <Todo ele={ele} data = {data} setData= {setData}/>
          </div>
        );
      })}
    </>
  );
}

export default App;
