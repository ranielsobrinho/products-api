import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";
import { fabricante } from '../../domain/entity/fabricante'

interface productsRequest {
  nome_produto: string
  fabricante: fabricante
  quantidade_estoque: number
  valor: number
}

class CreateProductService {
  async handle({ nome_produto, fabricante, quantidade_estoque, valor }: productsRequest): Promise<produtos | Error> {
    const repo = getRepository(produtos)
    if (await repo.findOne({ nome_produto })) {
      return new Error('Product already created. Choose another product name.')
    }
    const product = repo.create({
      nome_produto,
      fabricante,
      quantidade_estoque,
      valor
    })
    await repo.save(product)
    return product
  }
}

export default new CreateProductService()