import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceUserController } from "../controller/port/user.icontroll";
import { auth } from "../middleware/jwtVerify";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";
import { myDataSource } from "../common/data-source";
import { InterfaceUser } from "../repository/port/user.irepo";
import { InterfaceTodoService } from "../services/port/todo.iserv";
import { InterfaceUserService } from "../services/port/user.iserv";
import { UserService } from "../services/user.service";
import { UserController } from "../controller/user.controller";


export class UserRoutes extends CommonRouting {
    constructor (app: express.Application) {
        // define name of routes
        super(app, "CategoryRoutes")
    }

    // implements from common routing abstract
    configRoutes() {
        const repository: InterfaceUser = new UserRepository(User, myDataSource.manager)
        const service: InterfaceUserService = new UserService(repository)
        const controller: InterfaceUserController = new UserController(service)

        this.app.route('/api/v1/auth').post(controller.Register)
        this.app.route('/api/v1/login').post(controller.Login)
        this.app.route('/api/v1/refreshToken').post(controller.RefreshToken)
        this.app.route('/api/v1/user/:id').put(controller.Update)
        
        return this.app
    }
}