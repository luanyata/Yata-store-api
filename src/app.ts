import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as Helmet from "helmet";
import * as cors from 'cors';
import { ProductRouter } from './routers/product.router';



class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routesApp();
    }

    private middleware(): void {
        this.app.use(express.static('../public'))
        this.app.use(cors());
        this.app.use(bodyParse.json());
        this.app.use(bodyParse.urlencoded({ extended: false }));
        this.app.use(Helmet());
    }

    private routesApp(): void {
        new ProductRouter().router(this.app);
    }
}

export default new App().app;