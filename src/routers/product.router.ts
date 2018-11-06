import { Request, Response, Application } from 'express'
import { ProductController } from '../controllers/product.controller';

export class ProductRouter {

    private productCtrl = new ProductController();

    public router(app: Application): void {
        app.route('/products')
            .get((req: Request, res: Response) =>
                this.productCtrl.getAll(req, res));

        app.route('/products/:id')
            .get((req: Request, res: Response) =>
                this.productCtrl.getById(req, res))
    }
}