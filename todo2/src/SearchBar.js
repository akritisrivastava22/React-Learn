import React, {useState} from "react";

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
    <>
    <input type="text" value={todo} onChange={change} />
    <button type="submit" onClick={handlesubmit}>ADD</button>
    </>    
    )
}

export default SearchBar;