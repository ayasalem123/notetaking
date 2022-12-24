import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
export default function Add({todoList, setTodoList}){
    const [newTodo, setNewTodo] = useState("");
    const handleChange=(event)=>{
        let obj={id:uuidv4(),todo:event.target.value}
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