import express from "express"

export interface InterfaceCategoryController {
    CreateCategory(req: express.Request, res: express.Response): Promise<express.Response>   
}