import React, {useState} from "react";
import "./App.css";

const SearchBar =(props) =>{
    const [todo, setTodo] = useState("")

    function change(e) {
        setTodo(e.target.value);
      }
    function handlesubmit(){
        props.addTodo(todo);
        setTodo("");
    }
    return(
    <div className="text-center bg-emerald-700 py-8 ">
    <h1 className="text-4xl pt-3 font-poppins  ">Plan Your Day !!</h1>
    <div className="mt-10">
    <input type="text" value={todo} placeholder="Enter your Todo" onChange={change} className="h-18 w-96 text-2xl border-4 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-700 transition duration-200 "/>
    <button type="submit" onClick={handlesubmit} className="border-2  border-black focus:border-blue-500 text-2xl transition duration-200 h-15 ml-3 px-5 py-1  border-opacity-50 outline-none rounded-lg">ADD</button>
    </div>  </div>
    )
}
export default SearchBar;