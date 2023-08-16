import express from 'express'

export interface InterfaceUserController {
    Register(req: express.Request, res: express.Response): Promise<express.Response>
    Login(req: express.Request, res: express.Response): Promise<express.Response>
    Update(req: express.Request, res: express.Response): Promise<express.Response>
}