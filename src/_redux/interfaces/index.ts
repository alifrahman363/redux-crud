
export type todoInput = {
    task: string;
    assignTo: string;
    priority: string;
}

export interface TodoState {
    message: string;
    todosList: todoInput[];
    todoInput: todoInput;
}
