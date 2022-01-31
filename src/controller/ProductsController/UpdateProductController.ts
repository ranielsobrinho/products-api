import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import UpdateProductService from "../../service/ProductService/UpdateProductService";
import { ValidationError } from "yup";

class UpdateProductController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const { nome_produto, fabricante, quantidade_estoque, valor } = req.body
      const updated = await UpdateProductService.handle({ id, nome_produto, fabricante, quantidade_estoque, valor })

      if (updated instanceof Error) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          message: updated.message
        })
      }

      return res.json({
        status: ResponseStatus.OK,
        data: updated,
        message: 'Updated successfully.'
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

export default new UpdateProductController()