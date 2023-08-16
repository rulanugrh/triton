import express from 'express';
import http from 'http';
import cors from 'cors';
import { CommonRouting } from './common/routes.config';
import { TodoRoutes } from './routes/todo.routes';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

const routes: Array<CommonRouting> = [];
app.use(express.json())
app.use(cors)
routes.push(new TodoRoutes(app))

const runningMessage = `Server running at port : ${port}`
server.listen(port, () => {
    routes.forEach(( route: CommonRouting) => {
        console.log(`${route.getName}`)
    })

    console.info(runningMessage)
})