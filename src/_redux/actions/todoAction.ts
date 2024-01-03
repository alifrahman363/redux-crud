import { Dispatch } from "@reduxjs/toolkit";
import * as Types from "../types/todoType";
import { todoInput } from "../interfaces";

export const handleChangeTodoInput = (name: string, value: string) => (dispatch: Dispatch) => {
    const data = { name, value };
    dispatch({ type: Types.CHANGE_TODO_INPUT, payload: data });
}


export const addTodo = (todoInput: todoInput) => (dispatch: Dispatch) => {
    const responseData = {
        status: 200,
        message: "Todo added successfully",
    }
    if (todoInput.assignTo === "") {
        alert("Please select assign to");
        return;
    }
    if (todoInput.priority === "") {
        alert("Please select priority");
        return;
    }
    setItemInLocalStorage(todoInput)
    alert("Todo added successfully");
    dispatch({ type: Types.ADD_TODO, payload: responseData });
}

export const getTodos = () => (dispatch: Dispatch) => {
    const todos = getLocalStorageItem();
    dispatch({ type: Types.GET_TODOS, payload: todos });
}

const setItemInLocalStorage = (todo: todoInput) => {
    const todos = getLocalStorageItem()
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalStorageItem = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    return todos;
}