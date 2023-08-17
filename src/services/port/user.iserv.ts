import { UserRes } from "../../model/dao/user.dao";
import { UserReq } from "../../model/dto/user.dto";

export interface InterfaceUserService {
    CreateUser(userReq: UserReq): Promise<UserReq>
    FindByEmail(email: string): Promise<UserReq>
    Update(id: number, userReq: UserReq): Promise<UserReq>
}