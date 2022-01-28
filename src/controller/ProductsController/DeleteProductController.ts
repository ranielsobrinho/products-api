import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import DeleteProductService from "../../service/ProductService/DeleteProductService";

class DeleteProductController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const deleted = await DeleteProductService.handle(id)
      if (deleted instanceof Error) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          message: deleted.message
        })
      }

      return res.json({
        status: ResponseStatus.OK,
        message: 'Deleted successfully.'
      })
    } catch (error) {
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Sorry, something wrong just happened.'
      })
    }
  }
}

export default new DeleteProductController()