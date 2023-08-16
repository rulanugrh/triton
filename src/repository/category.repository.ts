import { EntityRepository, Repository } from 'typeorm'
import { Category } from '../entity/category.entity';
import { InterfaceCategory } from './port/category.irepo';
import { CategoryReq } from '../model/dto/category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> implements InterfaceCategory {
    async CreateCategory(cateReq: CategoryReq): Promise<Category> {
        cateReq.create_at = new Date()
        cateReq.update_at = new Date()
        try {
            return await this.create(cateReq).save()
        } catch (error) {
            throw new Error(`Something error: ${error}`)
        }
    }
}