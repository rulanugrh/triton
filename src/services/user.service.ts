import { UserRes } from "../model/dao/user.dao";
import { InterfaceUser } from "../repository/port/user.irepo";
import { InterfaceUserService } from "./port/user.iserv";
import { UserReq } from "../model/dto/user.dto";

export class UserService implements InterfaceUserService {
    repo: InterfaceUser
    constructor(repo: InterfaceUser) {
        this.repo = repo
    }
    async CreateUser(userReq: UserReq): Promise<UserRes> {
        try {
            const data = await this.repo.CreateUser(userReq) 
            let res: UserRes
            res.address = data.address
            res.avatar = data.avatar
            res.create_at = data.create_at
            res.email = data.email
            res.gender = data.gender
            res.name = data.name
            res.update_at = data.update_at
            
            return await res
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }

    async FindByEmail(email: string): Promise<UserRes> {
        try {
            const data = await this.repo.FindByEmail(email) 
            let res: UserRes
            res.address = data.address
            res.avatar = data.avatar
            res.create_at = data.create_at
            res.email = data.email
            res.gender = data.gender
            res.name = data.name
            res.update_at = data.update_at

            return await res
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }

    async Update(id: number, userReq: UserReq): Promise<UserRes> {
        try {
            const data = await this.repo.Update(id, userReq) 
            let res: UserRes
            res.address = data.address
            res.avatar = data.avatar
            res.create_at = data.create_at
            res.email = data.email
            res.gender = data.gender
            res.name = data.name
            res.update_at = data.update_at
            
            return await res
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }
}