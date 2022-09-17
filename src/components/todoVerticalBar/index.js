import Header from "../todoVerticalBar/header"
import Error from "./error"
import Filter from "./filter"
import Form from "./form"
import { useSelector,useDispatch } from "react-redux/es/exports";
import Darkmode from "./darkmode";
import { handleName } from "../../redux/name/nameSlice";
function Index() {
  const dispatch=useDispatch()
  const error=useSelector(state=>state.todos.error)
  const userName=useSelector(state=>state.name.name)
  return (
<> <Darkmode/>

<div className="vertical-bar">
     
     <div className="form-header">
     <Header/>
     <Form/>
     </div>
     {error&&  <Error/>}
     <Filter/>
    
     <div className="text-center text-white mt-4 ">
     <span>Merahaba</span>
     <p className="fs-2 m-0">{userName.toUpperCase()}</p>
     <button className="btn btn-sm btn-warning mt-2" onClick={()=>dispatch(handleName(null))}>Düzenle</button>
     </div>
 </div>
 
  </>
   
  )
}
export default Index