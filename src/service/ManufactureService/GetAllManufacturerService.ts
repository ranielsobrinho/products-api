import { getRepository } from "typeorm";
import { fabricante } from "../../domain/entity/fabricante";

class GetAllManufactureService {
  async handle() {
    const repo = getRepository(fabricante)
    const data = await repo.find()

    return data
  }
}

export default new GetAllManufactureService()