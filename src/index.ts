import express from 'express';
import http from 'http';
import cors from 'cors';
import debug from 'debug'
import { DataSource } from "typeorm"
import { CommonRouting } from './common/routes.config';
import { TodoRoutes } from './routes/todo.routes';
import expressWinston  from 'express-winston';
import winston from 'winston';
import { TodoRepository } from './repository/todo.repository';
import { TodoService } from './services/todo.service';
import { Todo } from './entity/todo.entity';
import { TodoController } from './controller/todo.controller';
import { Category } from './entity/category.entity';
import { env } from './common/env';
import { CategoryRepository } from './repository/category.repository';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controller/category.controller';
import { CategoryRoutes } from './routes/category.routes';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { UserRoutes } from './routes/user.routes';
import { myDataSource } from './common/data-source';

// creating express server
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const debugLog: debug.IDebugger = debug('app')
const routes: Array<CommonRouting> = [];




myDataSource.initialize()
    .then(() => {
        console.log("Success init database")
    })
    .catch((err) => {
        throw new Error(`Cant init database because : ${err}`)
    }) 

app.use(express.json())
app.use(cors)


// logger options for logging system
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    )
}

app.use(expressWinston.logger(loggerOptions))
routes.push(new TodoRoutes(app))
routes.push(new CategoryRoutes(app))
routes.push(new UserRoutes(app))

// listening port
const runningMessage = `Server running at port : ${port}`
server.listen(port, () => {
    routes.forEach(( route: CommonRouting) => {
        debugLog(`Routes configuration for ${route.name}`)
    })

    console.log(runningMessage)
})