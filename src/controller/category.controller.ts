import { InterfaceCategoryService } from "../services/port/category.iserv";
import { InterfaceCategoryController } from "./port/category.icontroll";
import { Request, Response} from "express"

export class CategoryController implements InterfaceCategoryController {
    serv: InterfaceCategoryService
    constructor(serv: InterfaceCategoryService) {
        this.serv = serv
    }
    async CreateCategory(req: Request, res: Response): Promise<Response>  {
        const data = await this.serv.CreateCategory(req.body)            

        try {            
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant create todo, because: ${error}`,
            )
        }
    }
}