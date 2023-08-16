import { EntityRepository, Repository } from 'typeorm'
import { Todo } from '../entity/todo.entity';
import { InterfaceTodo } from './port/todo.irepo';
import { TodoReq } from '../model/dto/todo.dto';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> implements InterfaceTodo {

    async CreateTodo(todo: TodoReq): Promise<Todo> {
        todo.create_at = new Date()
        todo.update_at = new Date()
        try {
            return await this.create(todo).save()
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }

    async FindTodo(): Promise<Todo[]> {
        return await this.find({})
    }

    async FindById(id: number): Promise<Todo> {
        try {
            return await this.findOneBy({id: id})
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }
    
    async Update(id: number, todo: TodoReq): Promise<Todo> {
        const { categoryID, name, description, isDone } = todo
        const todos = await this.FindById(id)
        todos.categoryID = categoryID
        todos.name  = name
        todos.isDone = isDone
        todos.description = description
        todos.update_at = new Date()

        try {
            return await todos.save()
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }

    async DeleteTodo(id: number): Promise<void> {
        try {
            await this.delete(id)
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }
}