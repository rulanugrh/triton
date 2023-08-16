import { CategoryReq } from "./category.dto"

export class TodoReq {
    id: number
    name: string
    description: string
    isDone: boolean
    categoryID: number
    category: CategoryReq
    create_at: Date
    update_at: Date
}