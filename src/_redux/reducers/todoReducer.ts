import Todolist from "../../pages/todo-list";
import { TodoState } from "../interfaces";
import * as Types from "../types/todoType";

const initialState: TodoState = {
    todosList: [],
    message: "",
    todoInput: {
        task: "",
        assignTo: "",
        priority: "",
    }
}

const TodoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.CHANGE_TODO_INPUT:
            return {
                ...state,
                todoInput: {
                    ...state.todoInput,
                    [action.payload.name]: action.payload.value
                }
            };
        case Types.ADD_TODO:
            return {
                ...state,
                todoInput: initialState.todoInput,
            };
        case Types.GET_TODOS:
            return {
                ...state,
                Todolist: action.payload,
            };
        default:
            break;
    }
    return state;
}

export default TodoReducer;