import { Router } from "express";
import { GetProductsController, CreateProductController, UpdateProductController, DeleteProductController } from "./controller/ProductsController/";

const routes = Router()

routes.get('/products', GetProductsController.execute)
routes.post('/products', CreateProductController.execute)
routes.put('/products/:id', UpdateProductController.execute)
routes.delete('/products/:id', DeleteProductController.execute)

export default routes