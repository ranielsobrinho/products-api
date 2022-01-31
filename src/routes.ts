import { Router } from "express";
import { GetProductsController, CreateProductController, UpdateProductController, DeleteProductController, GetOneProductController } from "./controller/ProductsController/";
import { CreateManufactureController, GetAllManufacturerController, GetOneManufacturerController } from "./controller/ManufactureController/";
import validate from "./middlewares/ValidationMiddleware";
import { manufactureSchema, productSchema } from "./utils/validations/";

const routes = Router()

routes.get('/products', GetProductsController.execute)
routes.get('/products/:id', GetOneProductController.execute)
routes.post('/products', validate(productSchema), CreateProductController.execute)
routes.put('/products/:id', validate(productSchema), UpdateProductController.execute)
routes.delete('/products/:id', DeleteProductController.execute)

routes.post('/manufacturers', validate(manufactureSchema), CreateManufactureController.execute)
routes.get('/manufacturers', GetAllManufacturerController.execute)
routes.get('/manufacturers/:id', GetOneManufacturerController.execute)

export default routes