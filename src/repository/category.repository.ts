import { EntityRepository, Repository } from 'typeorm'
import { Category } from '../entity/category.entity';
import { InterfaceCategory } from './port/category.irepo';
import { CategoryReq } from '../model/dto/category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> implements InterfaceCategory {
    async CreateCategory(cateReq: CategoryReq): Promise<Category> {
        try {
            return await this.create(cateReq).save()
        } catch (error) {
            throw new Error("cant create category")
        }
    }
}