import { InterfaceTodoService } from "./port/todo.iserv";
import { TodoReq } from "../model/dto/todo.dto";
import { TodoRes } from "../model/dao/todo.dao";
import { InterfaceTodo } from "../repository/port/todo.irepo";

export class TodoService implements InterfaceTodoService {
    repo: InterfaceTodo
    constructor(repo: InterfaceTodo) {
        this.repo = repo
    }

    async CreateTodo(req: TodoReq): Promise<TodoRes> {
        const data = await this.repo.CreateTodo(req)
        let todo: TodoRes
        todo.name = data.name
        todo.description = data.description
        todo.isDone = data.isDone
        todo.create_at = data.create_at
        todo.update_at = data.update_at
        todo.category_name = data.category.name

        try {
            return todo
        } catch (error) {
            throw new Error(`Something error: ${error}`)   
        }
    }

    async FindById(id: number): Promise<TodoRes> {
        const data = await this.repo.FindById(id)
        let todo: TodoRes
        todo.category_name = data.category.name
        todo.description = data.description
        todo.name = data.name
        todo.create_at = data.create_at
        todo.update_at = data.update_at
        todo.isDone = data.isDone

        try {
            return todo
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }

    async Update(id: number, req: TodoReq): Promise<TodoRes> {
        const data = await this.repo.Update(id, req)
        let todo: TodoRes
        todo.category_name = data.category.name
        todo.name = data.name
        todo.description = data.description
        todo.create_at = data.create_at
        todo.update_at = data.update_at 
        todo.isDone = data.isDone

        try {
            return todo
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }

    async FindAll(): Promise<TodoRes[]> {
        const data = await this.repo.FindTodo()
        let res: TodoRes[]
        for (const todo of data) {
            let todores: TodoRes
            todores.category_name = todo.category.name
            todores.name = todo.name
            todores.description = todo.description
            todores.create_at = todo.create_at
            todores.update_at = todo.update_at
            todores.isDone =  todo.isDone

            res.push(todores)
        }

        try {
            return res
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }

    async Delete(id: number): Promise<void> {
        return await this.repo.DeleteTodo(id)
    }
}