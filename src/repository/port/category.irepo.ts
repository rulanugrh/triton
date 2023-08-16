import { Category } from "../../entity/category.entity";
import { CategoryReq } from "../../model/dto/category.dto";

export interface InterfaceCategory {
    CreateCategory(cateReq: CategoryReq): Promise<Category>
}