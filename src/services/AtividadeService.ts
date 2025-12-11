import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Atividade from "../models/atividade"
import { AtividadeDTO } from "../dtos/AtividadeDTO"
import Feira from "../models/feira"
import Professor from "../models/professor"
import Sublocalidade from "../models/sublocalidade"

export class AtividadeService {

    private entityManager: EntityManager

    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AtividadeDTO): Promise<Atividade>{
        const feira = await this.entityManager.getRepository(Feira).findOneBy({ id: dto.idFeira })
        const professor = await this.entityManager.getRepository(Professor).findOneBy({ id: dto.idProfessor })
        const sublocalidade = await this.entityManager.getRepository(Sublocalidade).findOneBy({ id: dto.idSublocalidade })

        const atividade = new Atividade()
        atividade.nome = dto.nome
        atividade.descricao = dto.descricao
        atividade.qtdMonitores = dto.qtdMonitores
        atividade.tipoAtividade = dto.tipoAtividade
        atividade.tipo = dto.tipo
        atividade.duracao_da_secao = dto.duracaoSecao
        atividade.capacidade_de_visitantes = dto.capacidadeVisitantes
        atividade.status = dto.status
        atividade.feira = feira
        atividade.professor = professor
        atividade.sublocalidade = sublocalidade
        atividade.localidade = sublocalidade.localidade

        return await this.entityManager.getRepository(Atividade).save(atividade)
    }

    async obterTodos(): Promise<Atividade[]>{
        return await this.entityManager.getRepository(Atividade).find()
    }

    async obterPorId(id: number): Promise<Atividade>{
        return await this.entityManager.getRepository(Atividade).findOneBy({ id })
    }
}