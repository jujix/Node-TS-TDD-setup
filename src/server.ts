import express, {Application, Request, Response, NextFunction, request, response} from "express";
import routes from "routes/index";

export default function createServer() {
    const app: Application = express();

    app.get("/", (request: Request, res: Response, next: NextFunction) => {
        res.send("Hello world!");
    })

    app.use(routes);

    return app;
}