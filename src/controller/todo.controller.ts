import express  from "express";
import { InterfaceTodoController } from "./port/todo.icontroll";
import { InterfaceTodoService } from "../services/port/todo.iserv";

export class TodoController implements InterfaceTodoController {
    serv: InterfaceTodoService

    constructor(serv: InterfaceTodoService) {
        this.serv = serv
    }

    async CreateTodo(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const data = await this.serv.CreateTodo(req.body)            
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant create todo, because: ${error}`,
            )
        }
    }

    async FindTodoById(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const id = req.params.id
            const data = await this.serv.FindById(Number(id))
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }

    async FindTodo(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const data = await this.serv.FindAll()
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find todo, because: ${error}`,
            )
        }
    }

    async UpdateTodo(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const id = req.params.id
            const data = await this.serv.Update(Number(id), req.body)
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }

    async DeleteTodo(req: express.Request, res: express.Response): Promise<express.Response>  {
        try {
            const id = req.params.id
            const data = await this.serv.Delete(Number(id))
            return res.status(200).json(`success delete ${data}`)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }
}