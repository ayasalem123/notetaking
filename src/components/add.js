import React, { useState,useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
export default function Add({classn,todoList, setTodoList,isdone }){
    const [newTodo, setNewTodo] = useState("");
    useEffect(() => {
        let obj={...newTodo,classn:classn}
        setNewTodo(obj)
      },[classn]);
    const handleChange=(event)=>{
        let obj={id:uuidv4(),todo:event.target.value,isdone :isdone}
        setNewTodo(obj)
    }
    const adding=()=>{
        let addedToDo=[...todoList,newTodo]
        setTodoList( addedToDo)
    }

return (
<div>
<input type="text"   placeholder="enter a Todo" onChange={handleChange}></input>
<button onClick={()=>adding()}>add</button>
</div>
    )
}