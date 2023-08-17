import { Request, Response} from "express"

export interface InterfaceCategoryController {
    CreateCategory(req: Request, res: Response): Promise<Response>
}