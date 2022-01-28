import { getRepository } from "typeorm";
import { produtos } from "../../domain/entity/produtos";

class DeleteProductService {
  async handle(id: string) {
    const repo = getRepository(produtos)
    if (! await repo.findOne(id)) {
      return new Error('No existing product with this id.')
    }
    await repo.delete(id)
    return
  }
}

export default new DeleteProductService()