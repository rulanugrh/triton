import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceTodoController } from "../controller/port/todo.icontroll";
import { auth } from "../middleware/jwtVerify";


export class TodoRoutes extends CommonRouting {
    controller: InterfaceTodoController
    constructor (app: express.Application, controller: InterfaceTodoController) {
        // define name of routes
        super(app, "TodoRoutes")
        this.controller = controller
    }

    // implements from common routing abstract
    configRoutes() {
        this.app.route('/api/v1/todo').get(auth, this.controller.FindTodo)
        this.app.route('/api/v1/todo/:id').get(auth, this.controller.FindTodoById)
        this.app.route('/api/v1/todo').post(auth, this.controller.CreateTodo)
        this.app.route('/api/v1/todo/:id').put(auth, this.controller.UpdateTodo)
        this.app.route('/api/v1/todo/:id').delete(auth, this.controller.DeleteTodo)
        
        return this.app
    }
}