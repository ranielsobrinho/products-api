import { getRepository } from "typeorm";
import { fabricante } from "../../domain/entity/fabricante";

class DeleteManufacturerService {
  async handle(id: string) {
    const repo = getRepository(fabricante)
    if (! await repo.findOne(id)) {
      return new Error('No manufacturer exists with this id.')
    }
    await repo.delete(id)
    return
  }
}

export default new DeleteManufacturerService()