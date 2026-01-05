import { EntityManager } from "typeorm";
import AgendamentoFeira from "../models/agendamentoFeira";
import { AppDataSource } from "../data-source";
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO";
import Feira from "../models/feira";

//falta fazer validações nos métodos
export class AgendamentoFeiraService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AgendamentoFeiraDTO): Promise<AgendamentoFeira> {
        const agendamentoFeira = new AgendamentoFeira()
        const feira = await this.entityManager.getRepository(Feira).findOneByOrFail({ id: dto.idFeira })

        agendamentoFeira.data = dto.data
        agendamentoFeira.turno = dto.turno
        agendamentoFeira.qtdAlunosSuportados = dto.qtdAlunosSuportados
        agendamentoFeira.feira = feira

        return await this.entityManager.getRepository(AgendamentoFeira).save(agendamentoFeira)
    }

    async obterTodos(): Promise<AgendamentoFeira[]> {
        return await this.entityManager.getRepository(AgendamentoFeira).find({
            loadRelationIds: true
        })
    }

    async obterPorId(id: number): Promise<AgendamentoFeira> {
        return await this.entityManager.getRepository(AgendamentoFeira).findOneOrFail({
            where: { id: id },
            relations: {
                feira: true
            }
        })
    }
    async alterarPorId(id: number, dto: Partial<AgendamentoFeiraDTO>): Promise<AgendamentoFeira> {
        const agendamentoFeira = await this.obterPorId(id);
        const feira = await this.entityManager.getRepository(Feira).findOneByOrFail({ id: dto.idFeira })

        agendamentoFeira.feira = feira

        Object.assign(agendamentoFeira, dto);
        return await this.entityManager.getRepository(AgendamentoFeira).save(agendamentoFeira);
    }

    async deletarPorId(id: number): Promise<AgendamentoFeira> {
        const agendamentoFeira = await this.obterPorId(id);
        await this.entityManager.getRepository(AgendamentoFeira).softDelete({ id });
        return agendamentoFeira;
    }
}