import express from "express";
import { CommonRouting } from "../common/routes.config";


export class TodoRoutes extends CommonRouting {
    constructor (app: express.Application) {
        // define name of routes
        super(app, "TodoRoutes")
    }

    // implements from common routing abstract
    configRoutes() {
        this.app.route('/api/v1/todo').get((req: express.Request, res: express.Response) => {
            return res.status(200).send("hello world")
        })

        return this.app
    }
}