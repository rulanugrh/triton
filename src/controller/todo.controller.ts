import { Request, Response} from "express"
import { InterfaceTodoController } from "./port/todo.icontroll";
import { InterfaceTodoService } from "../services/port/todo.iserv";

export class TodoController implements InterfaceTodoController {
    serv: InterfaceTodoService

    constructor(serv: InterfaceTodoService) {
        this.serv = serv
    }

    async CreateTodo(req: Request, res: Response): Promise<Response> {
        const data = await this.serv.CreateTodo(req.body)  
        try {          
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant create todo, because: ${error}`,
            )
        }
    }

    async FindTodoById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id
        const data = await this.serv.FindById(Number(id))

        try {
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }

    async FindTodo(req: Request, res: Response): Promise<Response> {
        const data = await this.serv.FindAll()
        try {
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find todo, because: ${error}`,
            )
        }
    }

    async UpdateTodo(req: Request, res: Response): Promise<Response> {
        const id = req.params.id
        const data = await this.serv.Update(Number(id), req.body)
        try {
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }

    async DeleteTodo(req: Request, res: Response): Promise<Response>  {
        const id = req.params.id
        const data = await this.serv.Delete(Number(id))
        try {
            return res.status(200).json(`success delete with id ${id}`)
        } catch (error) {
            return res.status(500).json(
                `cant find by this id, because: ${error}`,
            )
        }
    }
}