import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeFilter } from "../../redux/todos/todoslice";
function Filter() {
    const dispatch=useDispatch()
    const filter=useSelector(state=>state.todos.filter)
    console.log(filter);
    return (
        <div className="filter mt-4">
            <ul>
                <li>
                    <a href="#" className={filter==="all"?"selected":""} onClick={(e)=>
                      {  e.preventDefault();
                        dispatch(changeFilter("all"))}}>All</a>
                 </li>
                 <li>
               <a href="#" className={filter==="active"?"selected":""}
                onClick={(e)=> {  e.preventDefault();
                        dispatch(changeFilter("active"))}}>Active</a> 
               </li>
               <li>
               <a href="#" className={filter==="completed"?"selected":""}
               onClick={(e)=> {  e.preventDefault();
                        dispatch(changeFilter("completed"))}}>Completed</a> 
               </li>
            </ul>
      
        </div>
            
    )
}
export default Filter