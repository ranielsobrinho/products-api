import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import GetAllManufacturerService from "../../service/ManufactureService/GetAllManufacturerService";

class GetAllManufacturerController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const data = await GetAllManufacturerService.handle()

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

export default new GetAllManufacturerController()