import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import GetOneProductService from "../../service/ProductService/GetOneProductService";

class GetOneProductController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const product = await GetOneProductService.handle(id)
      if (product instanceof Error) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          message: product.message
        })
      }
      return res.json({
        status: ResponseStatus.OK,
        data: product
      })
    } catch (error) {
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Sorry, something wrong just happened.'
      })
    }
  }
}

export default new GetOneProductController()