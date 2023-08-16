import { TodoRes } from "../../model/dao/todo.dao";
import { TodoReq } from "../../model/dto/todo.dto";

export interface InterfaceTodoService {
    CreateTodo(req: TodoReq): Promise<TodoRes>
    FindById(id: number): Promise<TodoRes>
    Update(id: number, req: TodoReq): Promise<TodoRes>
    FindAll(): Promise<TodoRes[]>
    Delete(id: number): Promise<void>
}