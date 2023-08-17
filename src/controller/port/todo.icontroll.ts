import { Request, Response} from "express"

export interface InterfaceTodoController {
    CreateTodo(req: Request, res: Response): Promise<Response>
    FindTodoById(req: Request, res: Response): Promise<Response>
    FindTodo(req: Request, res: Response): Promise<Response>
    UpdateTodo(req: Request, res: Response): Promise<Response>
    DeleteTodo(req: Request, res: Response): Promise<Response>    
}