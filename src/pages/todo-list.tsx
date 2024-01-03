import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../_redux/hooks/hooks";
import { getTodos } from "../_redux/actions/todoAction";
import { todoInput } from "../_redux/interfaces";

export default function Todolist() {
  const dispatch = useAppDispatch();
  const {Todolist} = useAppSelector(state => state.todo);

  useEffect(() => {
    dispatch(getTodos())
  }, []);

  return (
    <div className="container">
      <h2>This is to do list</h2>
      <table className="table table-dark table-striped-columns">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Assign To</th>
      <th scope="col">Priority</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
   Todolist && Todolist.length > 0 && Todolist.map((todo: todoInput, index: number)=>(
      <tr key={index}>
  <td>{index + 1}</td>
  <td>{todo.task}</td>
  <td>{todo.assignTo}</td>
  <td>{todo.priority}</td>
  <td>Edit, Delete</td>
</tr>
    ))
  }
  </tbody>
</table>
    </div>
  )
}
