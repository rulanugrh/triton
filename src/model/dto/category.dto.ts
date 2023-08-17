import { IsString, IsInt, IsDate } from "class-validator"
import { Type } from "class-transformer"

export class CategoryReq {
    @IsInt()
    @Type(() => Number)
    id: number

    @IsString()
    name: string

    create_at: Date
    update_at: Date
}