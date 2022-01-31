import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import CreateProductService from "../../service/ProductService/CreateProductService";
import { ValidationError } from "yup";

class CreateProductController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { nome_produto, fabricante, quantidade_estoque, valor } = req.body
      const product = await CreateProductService.handle({ nome_produto, fabricante, quantidade_estoque, valor })
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
      if (error instanceof ValidationError) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Sorry, something wrong just happened.'
      })
    }
  }
}

export default new CreateProductController()