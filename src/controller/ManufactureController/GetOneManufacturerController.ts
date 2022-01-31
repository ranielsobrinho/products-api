import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import GetOneManufacturerService from "../../service/ManufactureService/GetOneManufacturerService";

class GetOneManufacturerController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const data = await GetOneManufacturerService.handle(id)

      if (data instanceof Error) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          message: data.message
        })
      }

      return res.json({
        status: ResponseStatus.OK,
        data
      })
    } catch (error) {
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Sorry, something wrong just happened.'
      })
    }
  }
}

export default new GetOneManufacturerController()