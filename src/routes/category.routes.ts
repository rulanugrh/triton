import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceCategoryController } from "../controller/port/category.icontroll";
import { auth } from "../middleware/jwtVerify";


export class CategoryRoutes extends CommonRouting {
    controller: InterfaceCategoryController
    constructor (app: express.Application, controller: InterfaceCategoryController) {
        // define name of routes
        super(app, "CategoryRoutes")
        this.controller = controller
    }

    // implements from common routing abstract
    configRoutes() {
        this.app.route('/api/v1/category').post(auth, this.controller.CreateCategory)
        
        return this.app
    }
}