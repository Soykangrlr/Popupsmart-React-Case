import {useSelector,useDispatch} from "react-redux"
import { handleMode } from "../../redux/darkmode/modeSlice";
function Darkmode() {
    const dispatch=useDispatch()
    const mode=useSelector(state=>state.mode.darkMode)
console.log(mode);
  return (
    <div className="form-check form-switch mt-3 w-100 d-flex justify-content-end">
    
    <input checked={mode} className="form-check-input me-1" type="checkbox" onChange={()=>dispatch(handleMode(!mode))} />
    <span className="form-check-label" >{mode?"Dark Mode":"Light Mode"}</span>
</div>
  )
}
export default Darkmode