import { CategoryRes } from "../../model/dao/category.dao";
import { CategoryReq } from "../../model/dto/category.dto";

export interface InterfaceCategoryService {
    CreateCategory(req: CategoryReq): Promise<CategoryRes> 
}