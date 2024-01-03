
import { useAppDispatch, useAppSelector } from '../_redux/hooks/hooks'
import { addTodo, handleChangeTodoInput } from '../_redux/actions/todoAction';

export default function CreateTodo() {

const dispatch = useAppDispatch();

const {todoInput} = useAppSelector(state => state.todo);

const handleSubmit = () => {
  dispatch(addTodo(todoInput));
}
  return (
    <div>
      <h2>Create Todos</h2>
      <div className="container">

      <div className="border p-3 shadow-md" >
      <form>
        <div>
            <label htmlFor="task" className='form-label'> First Name</label>
            <textarea onChange={(e)=> dispatch(handleChangeTodoInput(e.target.name, e.target.value))} value={todoInput.task} className='form-control' name="task" id="task" cols={30} rows={10} placeholder='Enter Task'></textarea>
        </div>
        <div>
            <label htmlFor="assignTo">Assign To</label>
            <select onChange={(e)=> dispatch(handleChangeTodoInput(e.target.name, e.target.value))} value={todoInput.assignTo}  className='form-control'  name="assignTo" id="assignTo">
            <option value="" selected disabled>Select Assing</option>
              <option value="Mohian">Mohian</option>
              <option value="Anik">Anik</option>
              <option value="Alif">Alif</option>
              <option value="Omuk">Omuk</option>
              <option value="Tomuk">Tomuk</option>
            </select>
        </div>
        <div>
            <label htmlFor="priority">Assign To</label>
            <select onChange={(e)=> dispatch(handleChangeTodoInput(e.target.name, e.target.value))} value={todoInput.assignTo} className='form-control'  name="priority" id="priority">
              <option value="" selected disabled>Select Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
            </select>
        </div>
            <button onClick={(e) => {handleSubmit(e)}} className='btn btn-success mt-5' type='button'>Create</button>
      </form>
      </div>
      </div>
    </div>
  )
}
