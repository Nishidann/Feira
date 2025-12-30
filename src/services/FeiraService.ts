import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Feira from "../models/feira"
import { FeiraDTO } from "../dtos/FeiraDTO"

//fazer validações
export class FeiraService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: FeiraDTO): Promise<Feira> {
        const feira = new Feira()
        feira.nome = dto.nome

        return await this.entityManager.getRepository(Feira).save(feira)
    }

    async obterTodos(): Promise<Feira[]> {
        return await this.entityManager.getRepository(Feira).find()
    }

    async obterPorId(id: number): Promise<Feira> {
        return await this.entityManager.getRepository(Feira).findOneByOrFail({ id })
    }
}