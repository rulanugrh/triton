import { EntityRepository, Repository } from 'typeorm'
import { Todo } from '../entity/todo.entity';
import { InterfaceTodo } from './port/todo.irepo';
import { TodoReq } from '../model/dto/todo.dto';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> implements InterfaceTodo {

    async CreateTodo(todo: TodoReq): Promise<void> {
        try {
            await this.create(todo).save()
        } catch (error) {
            throw new Error("Cant crete todo")
        }
    }

    async FindTodo(): Promise<Todo[]> {
        return await this.find({})
    }

    async FindById(id: number): Promise<Todo> {
        try {
            return await this.findOneBy({id: id})
        } catch (error) {
            throw new Error("Cant find todo")
        }
    }
    
    async Update(id: number, todo: TodoReq): Promise<void> {
        const { categoryID, name, description, isDone } = todo
        const todos = await this.FindById(id)
        todos.categoryID = categoryID
        todos.name  = name
        todos.isDone = isDone
        todos.description = description

        try {
            await todos.save()
        } catch (error) {
            throw new Error("cant update todo")
        }
    }

    async DeleteTodo(id: number): Promise<void> {
        try {
            await this.delete(id)
        } catch (error) {
            throw new Error("cant delete todo")
        }
    }
}