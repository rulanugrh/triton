import { Type } from "class-transformer"
import { IsString, IsInt, IsEmail, MinLength, IsDate } from "class-validator"

export class UserReq {
    @IsInt()
    @Type(() => Number)
    id: number

    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string

    @IsString()
    gender: string

    @IsString()
    address?: string

    @IsString()
    avatar?: string

    @IsDate()
    create_at: Date

    @IsDate()
    update_at: Date
}