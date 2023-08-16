import { IsString, IsInt, IsDate } from "class-validator"
import { Type } from "class-transformer"

export class CategoryReq {
    @IsInt()
    @Type(() => Number)
    id: number

    @IsString()
    name: string

    @IsDate()
    create_at: Date

    @IsDate()
    update_at: Date
}