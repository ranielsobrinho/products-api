import { Router } from "express";
import GetProductsController from "./controller/ProductsController/GetProductsController";
import CreateProductController from "./controller/ProductsController/CreateProductController";

const routes = Router()

routes.get('/products', GetProductsController.execute)
routes.post('/products', CreateProductController.execute)

export default routes