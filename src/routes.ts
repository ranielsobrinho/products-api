import { Router } from "express";
import { GetProductsController, CreateProductController, UpdateProductController, DeleteProductController, GetOneProductController } from "./controller/ProductsController/";
import validate from "./middlewares/ValidationMiddleware";
import productSchema from "./utils/validations/productValidation";

const routes = Router()

routes.get('/products', GetProductsController.execute)
routes.get('/products/:id', GetOneProductController.execute)
routes.post('/products', validate(productSchema), CreateProductController.execute)
routes.put('/products/:id', validate(productSchema), UpdateProductController.execute)
routes.delete('/products/:id', DeleteProductController.execute)

export default routes