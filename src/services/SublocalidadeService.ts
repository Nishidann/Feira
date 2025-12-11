import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Sublocalidade from "../models/sublocalidade"
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO"
import Localidade from "../models/localidade"

//falta fazer validações nos métodos
export class SublocalidadeService {
    
    private entityManager: EntityManager
                                
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: SublocalidadeDTO): Promise<Sublocalidade>{
        const sublocalidade = new Sublocalidade()
        const localidade = await this.entityManager.getRepository(Localidade).findOneBy({ id: dto.idLocalidade })

        sublocalidade.nome = dto.nome
        sublocalidade.descricao = dto.descricao
        sublocalidade.localidade = localidade

        return await this.entityManager.getRepository(Sublocalidade).save(sublocalidade)
    }

    async obterTodos(): Promise<Sublocalidade[]>{
        return await this.entityManager.getRepository(Sublocalidade).find()
    }

    async obterPorId(id: number): Promise<Sublocalidade>{
        return await this.entityManager.getRepository(Sublocalidade).findOneBy({ id })
    }
}