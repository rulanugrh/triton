import { env } from "../common/env";
import { ComparePassword, HashPassword } from "../middleware/hashPassword";
import { UserReq } from "../model/dto/user.dto";
import { InterfaceUserService } from "../services/port/user.iserv";
import { InterfaceUserController } from "./port/user.icontroll";
import express from 'express'
import jwt from 'jsonwebtoken'

export class UserController implements InterfaceUserController {
    user: InterfaceUserService
    constructor(userServ: InterfaceUserService) {
        this.user = userServ
    }

    async Register(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            req.body.password = HashPassword(req.body.password)
            const data = await this.user.CreateUser(req.body)
            return res.send(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant create acccount, because: ${error}`,
            )
        }
    }
    async Login(req: express.Request, res: express.Response): Promise<express.Response> {
        const secret = env.jwt_secret
        try {
            ComparePassword(req.body.password, req.body.password)
            const data = await this.user.FindByEmail(req.body.email)
            const token = jwt.sign(req.body.email, secret, {
                algorithm: 'HS256',
                expiresIn: '1h',
                issuer: req.body.name
            })

            return res.send(200).json({
                'data': data,
                'token': token,
            })

        } catch (error) {
            return res.status(500).json(
                `cant login acccount, because: ${error}`,
            )
        }
    }

    async Update(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const id = req.params.id
            const data = await this.user.Update(Number(id), req.body)
            return res.send(200).json(data)
        } catch (error) {
            return res.status(500).json(
                `cant update acccount, because: ${error}`,
            )
        }
    }

    async RefreshToken(req: express.Request, res: express.Response): Promise<express.Response> {
        const secret = env.jwt_secret
        try {
            const _ = await this.user.FindByEmail(req.body.email)
            const token = jwt.sign(req.body.email, secret, {
                algorithm: 'HS256',
                expiresIn: '1h',
                issuer: req.body.name
            })

            return res.send(200).json({
                'msg': "success refresh token",
                'token': token,
            })

        } catch (error) {
            return res.status(500).json(
                `cant refresh token, because: ${error}`,
            )
        }
    }
}