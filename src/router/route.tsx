import {  createBrowserRouter} from "react-router-dom";
import Todolist from "../pages/todo-list";
import CreateTodo from "../pages/create-todo";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Todolist />,
    },
    {
        path: "/create",
        element: <CreateTodo />,
      },
  ]);