import { User } from "../../entity/user.entity";
import { UserReq } from "../../model/dto/user.dto";

export interface InterfaceUser {
    CreateUser(userReq: UserReq): Promise<User>
    FindByEmail(email: string): Promise<User>
    Update(id: number, userReq: UserReq): Promise<User>
}