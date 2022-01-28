import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import GetAllProductsService from "../../service/ProductService/GetAllProductsService";

class GetProductsController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const products = await GetAllProductsService.handle()

      return res.json({
        status: ResponseStatus.OK,
        data: products,
        totalRegisters: products.length
      })
    } catch (error) {
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Sorry, something wrong just happened.'
      })
    }
  }
}

export default new GetProductsController()