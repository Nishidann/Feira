import { EntityManager } from "typeorm";
import AgendamentoFeira from "../models/agendamentoFeira";
import { AppDataSource } from "../data-source";
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO";
import Feira from "../models/feira";

//falta fazer validações nos métodos
export class AgendamentoFeiraService {

    private entityManager: EntityManager
        
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AgendamentoFeiraDTO): Promise<AgendamentoFeira> {
        const agendamento = new AgendamentoFeira()
        const feira = await this.entityManager.getRepository(Feira).findOneBy({ id: dto.idFeira })

        agendamento.data = dto.data
        agendamento.turno = dto.turno
        agendamento.feira = feira

        return await this.entityManager.getRepository(AgendamentoFeira).save(agendamento)
    }

    async obterTodos(): Promise<AgendamentoFeira[]>{
        return await this.entityManager.getRepository(AgendamentoFeira).find()
    }
    
    async obterPorId(id: number): Promise<AgendamentoFeira>{
        return await this.entityManager.getRepository(AgendamentoFeira).findOneBy({ id })
    }
}