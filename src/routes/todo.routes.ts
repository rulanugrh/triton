import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceTodoController } from "../controller/port/todo.icontroll";


export class TodoRoutes extends CommonRouting {
    controller: InterfaceTodoController
    constructor (app: express.Application, controller: InterfaceTodoController) {
        // define name of routes
        super(app, "TodoRoutes")
        this.controller = controller
    }

    // implements from common routing abstract
    configRoutes() {
        this.app.route('/api/v1/todo').get(this.controller.FindTodo)
        this.app.route('/api/v1/todo/:id').get(this.controller.FindTodoById)
        this.app.route('/api/v1/todo').post(this.controller.CreateTodo)
        this.app.route('/api/v1/todo/:id').put(this.controller.UpdateTodo)
        this.app.route('/api/v1/todo/:id').delete(this.controller.DeleteTodo)
        
        return this.app
    }
}