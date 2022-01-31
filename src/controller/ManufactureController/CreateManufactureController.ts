import { Request, Response } from "express";
import { IResponse, ResponseStatus } from "../../utils/service";
import CreateManufactureService from "../../service/ManufactureService/CreateManufactureService";
import { ValidationError } from "yup";

class CreateManufactureController {
  async execute(req: Request, res: Response<IResponse>): Promise<Response<IResponse>> {
    try {
      const { nome_fabricante, telefone } = req.body
      const manufacture = await CreateManufactureService.handle({ nome_fabricante, telefone })

      if (manufacture instanceof Error) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          message: manufacture.message
        })
      }

      return res.json({
        status: ResponseStatus.OK,
        message: 'Created a new manufacturer.',
        data: manufacture
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

export default new CreateManufactureController()