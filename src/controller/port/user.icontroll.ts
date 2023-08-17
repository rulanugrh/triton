import { Request, Response} from "express"

export interface InterfaceUserController {
    Register(req: Request, res: Response): Promise<Response>
    Login(req: Request, res: Response): Promise<Response>
    Update(req: Request, res: Response): Promise<Response>
    RefreshToken(req: Request, res: Response): Promise<Response>
}