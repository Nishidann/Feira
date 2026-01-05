import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import MonitorAtividade from "../models/monitorAtividade"
import { MonitorAtividadeDTO } from "../dtos/MonitorAtividadeDTO"
import AgendamentoAtividadeFeira from "../models/agendamentoAtividadeFeira"
import Pessoa from "../models/pessoa"

// fazer validações
export class MonitorAtividadeService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: MonitorAtividadeDTO): Promise<MonitorAtividade> {
        const monitorAtividade = new MonitorAtividade()
        const agendamentoAtividadeFeira = await this.entityManager.getRepository(AgendamentoAtividadeFeira).findOneBy({ id: dto.idAgendamentoAtividadeFeira })
        const pessoa = await this.entityManager.getRepository(Pessoa).findOneBy({ id: dto.idPessoa })

        monitorAtividade.horaEntrada = dto.horaEntrada
        monitorAtividade.horaSaida = dto.horaSaida
        monitorAtividade.agendamentoAtividadeFeira = agendamentoAtividadeFeira
        monitorAtividade.pessoa = pessoa

        return await this.entityManager.getRepository(MonitorAtividade).save(monitorAtividade)
    }

    async obterTodos(): Promise<MonitorAtividade[]> {
        return await this.entityManager.getRepository(MonitorAtividade).find({
            relations: {
                agendamentoAtividadeFeira: true,
                pessoa: true
            }
        })
    }

    async obterPorId(id: number): Promise<MonitorAtividade> {
        return await this.entityManager.getRepository(MonitorAtividade).findOneOrFail({
            where: { id: id },
            relations: {
                agendamentoAtividadeFeira: true,
                pessoa: true
            }
        })
    }

    async alterarPorId(id: number, dto: Partial<MonitorAtividadeDTO>): Promise<MonitorAtividade> {
        const monitorAtividade = await this.obterPorId(id);
        Object.assign(monitorAtividade, dto);
        return await this.entityManager.getRepository(MonitorAtividade).save(monitorAtividade);
    }

    async deletarPorId(id: number): Promise<MonitorAtividade> {
        const monitorAtividade = await this.obterPorId(id);
        await this.entityManager.getRepository(MonitorAtividade).softDelete({ id });
        return monitorAtividade;
    }
}