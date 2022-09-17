import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  deleteTodoAsync,
  handlePage,
  handleSlice,
} from "../../redux/todos/todoslice";
function Footer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const page = useSelector((state) => state.todos.page);
  const filter = items.filter((item) => item.isCompleted === false);
  const roundPage = Math.ceil(items.length / 8);
  console.log(roundPage);
  const handleClearCompleted = (e) => {
    e.preventDefault();
    items.forEach((item) => {
      console.log(item);
      if (item.isCompleted) {
        dispatch(deleteTodoAsync(item.id));
      }
    });
  };
  return (
    <div className="footer bg-secondary text-white">
      <strong>{filter.length} active</strong>
      <div className="btn-group">
        <button
          disabled={page === 1 ? true : false}
          className="btn btn-outline-warning"
          onClick={() => {
            dispatch(handlePage(-1));
            dispatch(handleSlice(-8));
          }}
        >
          {"<"}
        </button>
        <span className="ms-2 me-2">{page}</span>
        <button
          disabled={page === roundPage ? true : false}
          className="btn btn-outline-warning"
          onClick={() => {
            dispatch(handlePage(1));
            dispatch(handleSlice(8));
          }}
        >
          {">"}
        </button>
      </div>
      <div className="me-2">
        <a href="" onClick={(e) => handleClearCompleted(e)}>
          Clear Completed
        </a>
      </div>
    </div>
  );
}
export default Footer;
