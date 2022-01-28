import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";

class GetAllProductsService {
  async handle() {
    const repo = getRepository(produtos)
    const products = await repo.find({
      select: ['id', 'nome_produto', 'fabricante', 'quantidade_estoque', 'valor']
    })

    return products
  }
}

export default new GetAllProductsService()