import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import AgendamentoAtividadeFeira from "../models/agendamentoAtividadeFeira"
import { AgendamentoAtividadeFeiraDTO } from "../dtos/AgendamentoAtividadeFeiraDTO"
import Atividade from "../models/atividade"
import AgendamentoFeira from "../models/agendamentoFeira"

//fazer validações
export class AgendamentoAtividadeFeiraService {

    private entityManager: EntityManager
    
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AgendamentoAtividadeFeiraDTO): Promise<AgendamentoAtividadeFeira>{
        const agendamentoAtividadeFeira = new AgendamentoAtividadeFeira()
        const atividade = await this.entityManager.getRepository(Atividade).findOneBy({ id: dto.idAtividade })
        const agendamentoFeira = await this.entityManager.getRepository(AgendamentoFeira).findOneBy({ id: dto.idAgendamentoFeira })

        agendamentoAtividadeFeira.qtdMonitoresInscritos = dto.qtdMonitoresInscritos
        agendamentoAtividadeFeira.status = dto.status
        agendamentoAtividadeFeira.agendamentoFeira = agendamentoFeira
        agendamentoAtividadeFeira.atividade = atividade

        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).save(agendamentoAtividadeFeira)
    }

    async obterTodos(): Promise<AgendamentoAtividadeFeira[]>{
        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).find()
    }

    async obterPorId(id: number): Promise<AgendamentoAtividadeFeira>{
        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).findOneBy({ id })
    }
}