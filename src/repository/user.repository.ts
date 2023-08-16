import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { InterfaceUser } from "./port/user.irepo";
import { UserReq } from "../model/dto/user.dto";

export class UserRepository extends Repository<User> implements InterfaceUser {
    async CreateUser(userReq: UserReq): Promise<User> {
        userReq.create_at = new Date()
        userReq.update_at = new Date()
        try {
            return await this.create(userReq).save()
        } catch (error) {
            throw new Error(`Cant create because ${error}`)
        }
    }

    async FindByEmail(email: string): Promise<User> {
        try {
            return await this.findOneBy({email: email})
        } catch (error) {
            throw new Error(`Cant find user ${error}`);
            
        }
    }

    async Update(id: number, userReq: UserReq): Promise<User> {
        const { name, password, avatar, address } = userReq
        let user = await this.findOneBy({id: id})
        user.name = name
        user.address = address
        user.password = password
        user.avatar = avatar
        user.update_at = new Date()

        try {
            return await user.save()
        } catch (error) {
            throw new Error(`Cant update because: ${error}`);
            
        }
    }
}