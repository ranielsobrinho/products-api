import { Router } from "express";
import { GetProductsController, CreateProductController, UpdateProductController } from "./controller/ProductsController/";

const routes = Router()

routes.get('/products', GetProductsController.execute)
routes.post('/products', CreateProductController.execute)
routes.put('/products/:id', UpdateProductController.execute)

export default routes