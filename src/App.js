import './App.css';
import {Route,Routes} from "react-router-dom"
import Add from './components/add';
import React, { useState } from 'react';
import Remove from './components/remove';
import Change from './components/change';
import Ok from './components/ok';
function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div className="grey" ><Add  todoList={todoList} setTodoList={setTodoList}/></div>}></Route>
        <Route path="/ok/:id" element ={<Ok todoList={ todoList} setTodoList={setTodoList}/>} ></Route>
      
      </Routes>
      <div>
      <ol>
      {
        todoList.map((el)=>{
         return (<li className="Todo"><p>{el.todo}</p>
         <Remove todoList={ todoList} setTodoList={setTodoList} id={el.id}/>
         <Change id={el.id}/>
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
