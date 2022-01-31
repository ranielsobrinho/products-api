import { getRepository } from "typeorm";
import { fabricante } from "../../domain/entity/fabricante";

interface fabricanteRequest {
  id: string,
  nome_fabricante: string
  telefone: number
}

class UpdateManufacturerService {
  async handle({ id, nome_fabricante, telefone }: fabricanteRequest) {
    const repo = getRepository(fabricante)
    if (! await repo.findOne(id)) {
      return new Error('No manufacturer exists with this id.')
    }

    const data = await repo.update(id, {
      nome_fabricante,
      telefone
    })
    return data
  }
}

export default new UpdateManufacturerService()