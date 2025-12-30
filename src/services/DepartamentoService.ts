import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Departamento from "../models/departamento"
import { DepartamentoDTO } from "../dtos/DepartamentoDTO"

//fazer validações
export class DepartamentoService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: DepartamentoDTO): Promise<Departamento> {
        const departamento = new Departamento()
        departamento.nome = dto.nome

        return await this.entityManager.getRepository(Departamento).save(departamento)
    }

    async obterTodos(): Promise<Departamento[]> {
        return await this.entityManager.getRepository(Departamento).find()
    }

    async obterPorId(id: number): Promise<Departamento> {
        return await this.entityManager.getRepository(Departamento).findOneByOrFail({ id })
    }

    async alterarPorId(id: number, dto: Partial<DepartamentoDTO>): Promise<Departamento> {
        const departamento = await this.obterPorId(id); // reutiliza a lógica e já lança erro se não encontrar
        Object.assign(departamento, dto);
        return await this.entityManager.getRepository(Departamento).save(departamento);
    }

    async deletarPorId(id: number): Promise<Departamento> {
        const departamento = await this.obterPorId(id);
        await this.entityManager.getRepository(Departamento).softDelete({ id });
        return departamento;
    }

}