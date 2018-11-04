import { Request, Response } from 'express';
const clone = require('clone');


export class ProductController {
    public getAll(req: Request, res: Response) {


        const products = {

            listProducts: [
                { id: 1, image: '', name: 'iPhone', value: 5000.00, category: 'eletronic' },
                { id: 2, image: '', name: 'Xadrez', value: 5000.00, category: 'toy' },
                { id: 3, image: '', name: 'Dama', value: 5000.00, category: 'toy' },
                { id: 4, image: '', name: 'Freio', value: 5000.00, category: 'car' },
                { id: 5, image: '', name: 'Pneu', value: 5000.00, category: 'car' },
                { id: 6, image: '', name: 'Xbox One', value: 5000.00, category: 'game' },
                { id: 7, image: '', name: 'Xbox 360', value: 5000.00, category: 'game' },
                { id: 8, image: '', name: 'PS4', value: 5000.00, category: 'game' },
                { id: 9, image: '', name: 'PSP', value: 5000.00, category: 'game' },
                { id: 10, image: '', name: 'Batedeira', value: 5000.00, category: 'electro' },
            ]
        }

        let data = clone(products);

        res.json(data).status(200);
    }
}