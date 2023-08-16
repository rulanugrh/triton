import { CategoryRes } from "../model/dao/category.dao";
import { CategoryReq } from "../model/dto/category.dto";
import { InterfaceCategory } from "../repository/port/category.irepo";
import { InterfaceCategoryService } from "./port/category.iserv";

export class CategoryService implements InterfaceCategoryService {
    repo: InterfaceCategory
    constructor(repo: InterfaceCategory) {
        this.repo = repo
    }

    async CreateCategory(req: CategoryReq): Promise<CategoryRes> {
        const data = await this.repo.CreateCategory(req)
        let res: CategoryRes
        res.name = data.name
        
        try {
            return res
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }
}