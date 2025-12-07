import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Localidade from "../models/localidade"
import { LocalidadeDTO } from "../dtos/LocalidadeDTO"

//fazer validações
export class LocalidadeService {

    private entityManager: EntityManager
                   
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: LocalidadeDTO): Promise<Localidade>{
        const localidade = new Localidade()
        localidade.nome = dto.nome
        localidade.descricao = dto.descricao
        localidade.qtd_salas = dto.qtdSalas
        
        return await this.entityManager.getRepository(Localidade).save(localidade)
    }

    async obterTodos(): Promise<Localidade[]>{
        return await this.entityManager.getRepository(Localidade).find()
    }

    async obterPorId(id: number): Promise<Localidade>{
        return await this.entityManager.getRepository(Localidade).findOneBy({ id })
    }
}