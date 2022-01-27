import { Router } from "express";
import GetProductsController from "./controller/ProductsController/GetProductsController";

const routes = Router()

routes.get('/products', GetProductsController.execute)

export default routes