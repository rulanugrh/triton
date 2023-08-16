import { TodoReq } from "../../model/dto/todo.dto";
import { Todo } from "../../entity/todo.entity";

export interface InterfaceTodo {
    CreateTodo(todo: TodoReq): Promise<Todo>
    FindTodo(): Promise<Todo[]>
    FindById(id: number): Promise<Todo>
    Update(id: number, todo: TodoReq): Promise<Todo>
    DeleteTodo(id: number): Promise<void>
}