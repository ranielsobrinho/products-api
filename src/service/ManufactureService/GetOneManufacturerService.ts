import { getRepository } from "typeorm";
import { fabricante } from "../../domain/entity/fabricante";

class GetOneManufacturerService {
  async handle(id: string): Promise<fabricante | Error> {
    const repo = getRepository(fabricante)
    const data = await repo.findOne(id)
    if (!data) {
      return new Error('No manufacturer exists with this id.')
    }
    return data
  }
}

export default new GetOneManufacturerService()