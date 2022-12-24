export default function Remove({ todoList, setTodoList,id}){
    const removeTodo=()=>{
        let filteredTodo= todoList.filter((el)=>el.id!=id)
        setTodoList(filteredTodo)
    }
    return(<button onClick={removeTodo}>remove</button>)
}