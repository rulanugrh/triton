import dotenv from 'dotenv'

dotenv.config()

export const env = {
    database: {
        host: process.env.MYSQLDB_HOST,
        port: process.env.MYSQLDB_PORT,
        name: process.env.MYSQLDB_NAME,
        user: process.env.MYSQLDB_USER,
        pass: process.env.MYSQLDB_PASS,
    },
    jwt_secret: process.env.JWT_SECRET
}