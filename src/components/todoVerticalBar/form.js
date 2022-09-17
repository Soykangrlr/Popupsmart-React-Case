import { useState } from "react"
import { useDispatch,useSelector } from "react-redux/es/exports";
import { handleError, postTodoAsync } from "../../redux/todos/todoslice";
import Loading from "../loading/loading";
function Form() {
    const [content,setContent]=useState()
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.todos.postLoading)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(content.trim().length<3){
          dispatch(handleError("En Az 3 Karakterli Olmalıdır."))
        }else{
          await dispatch(postTodoAsync(content))
          dispatch(handleError(null))
        }
        setContent("")
       
    }
  return (
   <form onSubmit={(e)=>handleSubmit(e)}>
    <input
    disabled={loading}
    value={content}
    className="todo-input"
    placeholder="Todo Giriniz"
    onChange={(e)=>setContent(e.target.value)}
    />
    {loading&&  <Loading/>}
   
   </form>
  )
}
export default Form