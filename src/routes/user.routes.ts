import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceUserController } from "../controller/port/user.icontroll";
import { auth } from "../middleware/jwtVerify";


export class UserRoutes extends CommonRouting {
    controller: InterfaceUserController
    constructor (app: express.Application, controller: InterfaceUserController) {
        // define name of routes
        super(app, "CategoryRoutes")
        this.controller = controller
    }

    // implements from common routing abstract
    configRoutes() {
        this.app.route('/api/v1/auth').post(this.controller.Register)
        this.app.route('/api/v1/login').post(this.controller.Login)
        this.app.route('/api/v1/refreshToken').post(this.controller.RefreshToken)
        this.app.route('/api/v1/user/:id').put(auth, this.controller.Update)
        
        return this.app
    }
}