import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";
import { fabricante } from '../../domain/entity/fabricante'

interface updateRequest {
  id: string
  nome_produto: string
  fabricante: fabricante
  quantidade_estoque: number
  valor: number
}

class UpdateProductService {
  async handle({ id, nome_produto, fabricante, quantidade_estoque, valor }: updateRequest) {
    const repo = getRepository(produtos)
    if (! await repo.findOne(id)) {
      return new Error('No existing product with this id.')
    }
    const update = await repo.update(id, {
      nome_produto,
      fabricante,
      quantidade_estoque,
      valor
    })

    return update
  }
}

export default new UpdateProductService()