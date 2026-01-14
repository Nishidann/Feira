import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Sublocalidade from "../models/sublocalidade"
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO"
import Localidade from "../models/localidade"

//falta fazer validações nos métodos
export class SublocalidadeService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: SublocalidadeDTO): Promise<Sublocalidade> {
        const sublocalidade = new Sublocalidade()
        const localidade = await this.entityManager.getRepository(Localidade).findOneByOrFail({ id: dto.idLocalidade })

        sublocalidade.nome = dto.nome
        sublocalidade.descricao = dto.descricao
        sublocalidade.localidade = localidade

        return await this.entityManager.getRepository(Sublocalidade).save(sublocalidade)
    }

    async obterTodos(): Promise<Sublocalidade[]> {
        return await this.entityManager.getRepository(Sublocalidade).find({
            loadRelationIds: true
        })
    }

    async obterPorId(id: number): Promise<Sublocalidade> {
        return await this.entityManager.getRepository(Sublocalidade).findOneOrFail({
            where: { id: id },
            relations: {
                localidade: true
            }
        })
    }

    async alterarPorId(id: number, dto: Partial<SublocalidadeDTO>): Promise<Sublocalidade> {
        const sublocalidade = await this.obterPorId(id);
        const localidade = await this.entityManager.getRepository(Localidade).findOneByOrFail({ id: dto.idLocalidade })

        sublocalidade.localidade = localidade

        Object.assign(sublocalidade, dto);
        return await this.entityManager.getRepository(Sublocalidade).save(sublocalidade);
    }

    async deletarPorId(id: number): Promise<Sublocalidade> {
        const sublocalidade = await this.obterPorId(id);
        await this.entityManager.getRepository(Sublocalidade).softDelete({ id });
        return sublocalidade;
    }
}