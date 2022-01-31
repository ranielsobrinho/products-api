import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import DeleteManufacturerService from "../../service/ManufactureService/DeleteManufacturerService";

class DeleteManufacturerController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const deleted = await DeleteManufacturerService.handle(id)

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

export default new DeleteManufacturerController()