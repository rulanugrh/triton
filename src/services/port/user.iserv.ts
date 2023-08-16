import { UserRes } from "../../model/dao/user.dao";
import { UserReq } from "../../model/dto/user.dto";

export interface InterfaceUserService {
    CreateUser(userReq: UserReq): Promise<UserRes>
    FindByEmail(email: string): Promise<UserRes>
    Update(id: number, userReq: UserReq): Promise<UserRes>
}