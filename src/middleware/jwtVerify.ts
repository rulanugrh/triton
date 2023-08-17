import express from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from '../common/env'


export interface CustomRequest extends express.Request {
    token: string | JwtPayload
}

export const auth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const secret = env.jwt_secret
    try {
        
        const token = req.header("Authorization")?.replace('Bearer ', '')
        if (!token) {
            throw new Error()
        }

        const decoded: string | JwtPayload = jwt.verify(token, secret);
        (req as CustomRequest).token = decoded
        
        next()
    } catch (error) {
        res.status(401).send('Pliss authentication')
    }
}