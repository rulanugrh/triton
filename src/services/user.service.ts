import { UserRes } from "../model/dao/user.dao";
import { InterfaceUser } from "../repository/port/user.irepo";
import { InterfaceUserService } from "./port/user.iserv";
import { UserReq } from "../model/dto/user.dto";

export class UserService implements InterfaceUserService {
    repo: InterfaceUser
    constructor(repo: InterfaceUser) {
        this.repo = repo
    }
    async CreateUser(userReq: UserReq): Promise<UserReq> {
        try {
            return await this.repo.CreateUser(userReq)
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }

    async FindByEmail(email: string): Promise<UserReq> {
        try {
            return await this.repo.FindByEmail(email)
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }

    async Update(id: number, userReq: UserReq): Promise<UserReq> {
        try {
            return await this.repo.Update(id, userReq)
        } catch (error) {
            throw new Error(`Cant create because: ${error}`);
            
        }
    }
}