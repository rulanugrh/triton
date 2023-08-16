export class UserReq {
    id: number
    name: string
    email: string
    password: string
    gender: string
    address?: string
    avatar?: string
    create_at: Date
    update_at: Date
}