import { useSelector } from "react-redux/es/exports";
function Error() {
    const error=useSelector(state=>state.todos.error)
  return (
    <p className="text-danger ms-4">{error}</p>
  )
}
export default Error