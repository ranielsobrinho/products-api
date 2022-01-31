import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import UpdateManufacturerService from "../../service/ManufactureService/UpdateManufacturerService";
import { ValidationError } from "yup";

class UpdateManufacturerController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { id } = req.params
      const { nome_fabricante, telefone } = req.body
      const data = await UpdateManufacturerService.handle({ id, nome_fabricante, telefone })

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

export default new UpdateManufacturerController()