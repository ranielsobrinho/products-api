import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";

class GetOneProductService {
  async handle(id: string): Promise<produtos | Error> {
    const repo = getRepository(produtos)
    const product = await repo.findOne(id, {
      select: ['id', 'nome_produto', 'fabricante', 'quantidade_estoque', 'valor'],
      relations: ['fabricante']
    })
    if (!product) {
      return new Error('No product exists with this id.')
    }
    return product
  }
}

export default new GetOneProductService()