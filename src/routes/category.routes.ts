import express from "express";
import { CommonRouting } from "../common/routes.config";
import { InterfaceCategoryController } from "../controller/port/category.icontroll";
import { auth } from "../middleware/jwtVerify";
import { CategoryController } from "../controller/category.controller";
import { InterfaceCategory } from "../repository/port/category.irepo";
import { CategoryRepository } from "../repository/category.repository";
import { Category } from "../entity/category.entity";
import { myDataSource } from "../common/data-source";
import { InterfaceCategoryService } from "../services/port/category.iserv";
import { CategoryService } from "../services/category.service";


export class CategoryRoutes extends CommonRouting {    
    constructor (app: express.Application) {
        // define name of routes
        super(app, "CategoryRoutes")
    }

    // implements from common routing abstract
    configRoutes() {
        const repository: InterfaceCategory = new CategoryRepository(Category, myDataSource.manager)
        const services: InterfaceCategoryService = new CategoryService(repository)
        const controller: InterfaceCategoryController = new CategoryController(services)
        this.app.route('/api/v1/category').post(controller.CreateCategory)
        
        return this.app
    }

}