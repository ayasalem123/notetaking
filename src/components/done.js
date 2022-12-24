export default function Done({ele,setTodoList,todoList}){
    const handle=()=>{
         let newtodolist=todoList.map((el)=>{
            if(el.id==ele.id){
                let newvar={...el , isdone:!el.isdone}
                return (newvar)
            }
            return (el)
        })
        setTodoList(newtodolist)
    }
    return <button onClick={()=> {handle()}} >done</button>
}