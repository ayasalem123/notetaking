
import {useParams,useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';

import userEvent from "@testing-library/user-event";
export default function Ok({ todoList,setTodoList} ){
    const navigate = useNavigate();
    const {id}=useParams()
 
    let theValue= todoList.filter((el)=>el.id==id)
    const [newTodo, setNewTodo] = useState(theValue[0].todo);
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
    <button onClick={()=>{changeTodo(); navigate("/");}}>OK</button>
        </div>
 
    )
}