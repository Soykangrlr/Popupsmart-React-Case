import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { completedTodoAsync, deleteTodoAsync, getTodoAsync } from "../../redux/todos/todoslice";
import Loading from "../loading/loading";
let filtered=[]
function List() {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.todos.items)
    const filter=useSelector(state=>state.todos.filter)
    const getloading=useSelector(state=>state.todos.getLoading)
    const deleteLoading=useSelector(state=>state.todos.deleteLoading)
    const updateLoading=useSelector(state=>state.todos.updateLoading)
    const mode=useSelector(state=>state.mode.darkMode)
    const slice=useSelector(state=>state.todos.slice)
   
    useEffect(()=>{
      dispatch(getTodoAsync())
    },[dispatch])
   
    let order=[...items].reverse()
  
    filtered=order
    if(filter!=="all"){
      filtered=order.filter(item=>filter==="active"?item.isCompleted===false:item.isCompleted===true)
    }
    const handleComleted= async(id,completed)=>{
      await dispatch(completedTodoAsync({id,data:{completed}}))
    }
  return (
  
    <div className="container-fluid mt-4 ">
      {getloading&&<Loading/>}
      {filtered.length===0 &&<h1 className={mode?"text-white":"text-dark"}>Todo List Boş</h1>}
        <ul className="todo-list">
        {filtered.slice(slice,slice+8).map((item)=>(
            <li key={item.id} >
            <div className="d-flex " >
              <input
                className="toggle"
                type="checkbox"
                checked={item.isCompleted}
                onChange={()=>handleComleted(item.id,!item.isCompleted)}
              />
              <label className={item.isCompleted?"text-muted text-decoration-line-through":mode?"text-white":"text-dark"}>{item.content}</label>
 
             
              <button onClick={()=>  dispatch(deleteTodoAsync(item.id))} className={mode?"destroy bg-dark":"destroy bg-white"}></button>
            </div>
          </li>
        ))}
        
        </ul>
          {deleteLoading&&
          <div className="w-100 mt-3 text-center"><span className="text-danger  ">Siliniyor</span></div>}
          {updateLoading&&
          <div className="w-100 mt-3 text-center"><span className="text-danger  ">Güncelleniyor</span></div>}
    </div>
  )
}
export default List