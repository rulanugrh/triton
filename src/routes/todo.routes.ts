import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceTodoController } from "../controller/port/todo.icontroll";
import { auth } from "../middleware/jwtVerify";
import { TodoRepository } from "../repository/todo.repository";
import { Todo } from "../entity/todo.entity";
import { myDataSource } from "../common/data-source";
import { InterfaceTodoService } from "../services/port/todo.iserv";
import { TodoService } from "../services/todo.service";
import { InterfaceTodo } from "../repository/port/todo.irepo";
import { TodoController } from "../controller/todo.controller";


export class TodoRoutes extends CommonRouting {
    constructor (app: express.Application) {
        // define name of routes
        super(app, "TodoRoutes")
    }

    // implements from common routing abstract
    configRoutes() {
        const repository: InterfaceTodo = new TodoRepository(Todo, myDataSource.manager)
        const services: InterfaceTodoService = new TodoService(repository)
        const controller: InterfaceTodoController = new TodoController(services)

        this.app.route('/api/v1/todo').get(controller.FindTodo)
        this.app.route('/api/v1/todo/:id').get(controller.FindTodoById)
        this.app.route('/api/v1/todo').post(controller.CreateTodo)
        this.app.route('/api/v1/todo/:id').put(controller.UpdateTodo)
        this.app.route('/api/v1/todo/:id').delete(controller.DeleteTodo)
        
        return this.app
    }
}