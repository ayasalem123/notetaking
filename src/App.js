import './App.css';
import {Route,Routes} from "react-router-dom"
import Add from './components/add';
import React, { useState } from 'react';
import Remove from './components/remove';
import Change from './components/change';
import Ok from './components/ok';
import Done from './components/done';
function App() {
  const [isdone,setisdone] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [classn, setClassn] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div className="grey" ><Add classn={classn} todoList={todoList} setTodoList={setTodoList} isdone={isdone}/></div>}></Route>
        <Route path="/ok/:id" element ={<Ok todoList={ todoList} setTodoList={setTodoList}/>} ></Route>
      
      </Routes>
      <div>
      <ol>
      {
        todoList.map((el)=>{
          console.log(isdone)
         return (<li style={{
          textDecoration: el.isdone ? 'line-through':'',
          color: el.isdone ? 'green' : '',
        }}><p>{el.todo}</p>
         <Remove todoList={ todoList} setTodoList={setTodoList} id={el.id}/>
         <Change id={el.id}/>
         <Done ele={el} setTodoList={setTodoList} todoList={todoList} />
         </li>
         )
        })
      }
      </ol>
      </div>
    </div>
  );
}

export default App;
