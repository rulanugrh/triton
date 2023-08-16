import { IsString, IsInt } from "class-validator"
import { Type } from "class-transformer"

export class CategoryReq {
    @IsInt()
    @Type(() => Number)
    id: number

    @IsString()
    name: string

}