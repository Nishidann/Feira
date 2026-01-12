import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import AgendamentoAtividadeFeira from "../models/agendamentoAtividadeFeira"
import { AgendamentoAtividadeFeiraDTO } from "../dtos/AgendamentoAtividadeFeiraDTO"
import Atividade from "../models/atividade"
import AgendamentoFeira from "../models/agendamentoFeira"

//fazer validações
export class AgendamentoAtividadeFeiraService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AgendamentoAtividadeFeiraDTO): Promise<AgendamentoAtividadeFeira> {
        const agendamentoAtividadeFeira = new AgendamentoAtividadeFeira()
        const atividade = await this.entityManager.getRepository(Atividade).findOneByOrFail({ id: dto.idAtividade })
        const agendamentoFeira = await this.entityManager.getRepository(AgendamentoFeira).findOneByOrFail({ id: dto.idAgendamentoFeira })

        agendamentoAtividadeFeira.qtdMonitoresInscritos = dto.qtdMonitoresInscritos
        agendamentoAtividadeFeira.status = dto.status
        agendamentoAtividadeFeira.agendamentoFeira = agendamentoFeira
        agendamentoAtividadeFeira.atividade = atividade

        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).save(agendamentoAtividadeFeira)
    }

    async obterTodos(): Promise<AgendamentoAtividadeFeira[]> {
        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).find({
            loadRelationIds: true
        })
    }

    async obterPorId(id: number): Promise<AgendamentoAtividadeFeira> {
        return await this.entityManager.getRepository(AgendamentoAtividadeFeira).findOneOrFail({
            where: { id: id },
            relations: {
                agendamentoFeira: true,
                atividade: true,
                monitoratividade: true
            }
        })
    }

    async alterarPorId(id: number, dto: Partial<AgendamentoAtividadeFeiraDTO>): Promise<AgendamentoFeira> {
        const agendamentoAtividade = await this.obterPorId(id);
        const atividade = await this.entityManager.getRepository(Atividade).findOneByOrFail({ id: dto.idAtividade })
        const agendamentoFeira = await this.entityManager.getRepository(AgendamentoFeira).findOneByOrFail({ id: dto.idAgendamentoFeira })

        agendamentoAtividade.atividade = atividade;
        agendamentoAtividade.agendamentoFeira = agendamentoFeira;


        Object.assign(agendamentoAtividade, dto);
        return await this.entityManager.getRepository(AgendamentoFeira).save(agendamentoAtividade);
    }

    async deletarPorId(id: number): Promise<AgendamentoAtividadeFeira> {
        const agendamentoAtividade = await this.obterPorId(id);
        await this.entityManager.getRepository(AgendamentoAtividadeFeira).softDelete({ id });
        return agendamentoAtividade;
    }
}