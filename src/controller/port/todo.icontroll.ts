import express from "express"

export interface InterfaceTodoController {
    CreateTodo(req: express.Request, res: express.Response): Promise<express.Response>
    FindTodoById(req: express.Request, res: express.Response): Promise<express.Response>
    FindTodo(req: express.Request, res: express.Response): Promise<express.Response>
    UpdateTodo(req: express.Request, res: express.Response): Promise<express.Response>
    DeleteTodo(req: express.Request, res: express.Response): Promise<express.Response>    
}