
import { DataSource } from "typeorm"
import { env } from "./env"
import { Todo } from "../entity/todo.entity"
import { Category } from "../entity/category.entity"
import { User } from "../entity/user.entity"

export const myDataSource = new DataSource({
    type: "mysql",
    host: `${env.database.host}`,
    port: Number(env.database.port),
    username: env.database.user,
    password: env.database.pass,
    database: env.database.name,
    entities: [Todo, Category, User],
})
