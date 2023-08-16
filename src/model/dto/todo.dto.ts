import { CategoryReq } from "./category.dto"
import { Type } from "class-transformer"
import { IsString, IsInt, IsBoolean, IsDate } from "class-validator"

export class TodoReq {
    @IsInt()
    @Type(() => Number)
    id: number

    @IsString()
    name: string

    @IsString()
    description: string

    @IsBoolean()
    isDone: boolean

    @IsInt()
    @Type(() => Number)
    categoryID: number
    
    category: CategoryReq

    @IsDate()
    create_at: Date
    
    @IsDate()
    update_at: Date
}