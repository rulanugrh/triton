import express from 'express';

export abstract class CommonRouting {
    // Creating common routing for API
    app: express.Application
    name: string

    // constructor for routes
    constructor(app: express.Application, name: string) {
        this.app = app
        this.name = name
        this.configRoutes()
        this.getName()
    }

    getName() {
        return this.name
    }


    // abstract if for implements different each class
    abstract configRoutes(): express.Application;

}