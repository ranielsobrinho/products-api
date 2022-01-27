import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";

class GetAllProductsService {
  async handle() {
    const repo = getRepository(produtos)
    const products = await repo.find()

    return products
  }
}

export default new GetAllProductsService()