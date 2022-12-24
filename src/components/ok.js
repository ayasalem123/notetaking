
import {useParams} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import userEvent from "@testing-library/user-event";
export default function Ok({ todoList,setTodoList} ){
    const {id}=useParams()
    const [newTodo, setNewTodo] = useState("");
    let theValue= todoList.filter((el)=>el.id==id)
    const [value, setValue] = useState(theValue[0].todo);
   
    const handleChange=(event)=>{
        setNewTodo(event.target.value)
        setValue(event.target.value)
    }
    const changeTodo=()=> {let filteredTodo= todoList.map(
        (el)=>{
            if(el.id==id)
             {el.todo=newTodo
            } 
            return el
        }
        )
        setTodoList(filteredTodo)}

    return(
        <div>
     <input type="text"  value={value} onChange={handleChange}  placeholder="enter a Todo" ></input>
    <button onClick={()=>changeTodo()}>OK</button>
        </div>
 
    )
}