import { CategoryReq } from "./category.dto"

export interface TodoReq {
    id: string
    name: string
    description: string
    isDone: boolean
    category: CategoryReq
    create_at: Date
    update_at: Date
}