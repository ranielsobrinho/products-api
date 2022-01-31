import { getRepository } from "typeorm";
import { fabricante } from "../../domain/entity/fabricante";

interface manufactureRequest {
  nome_fabricante: string
  telefone: number
}

class CreateManufactureService {
  async handle({ nome_fabricante, telefone }: manufactureRequest): Promise<fabricante | Error> {
    const repo = getRepository(fabricante)
    if (await repo.findOne({ nome_fabricante })) {
      return new Error('This name already exists. Create a new one.')
    }

    const manufacturer = repo.create({
      nome_fabricante,
      telefone
    })

    await repo.save(manufacturer)
    return manufacturer
  }
}

export default new CreateManufactureService()