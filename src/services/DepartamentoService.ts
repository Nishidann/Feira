import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Departamento from "../models/departamento"
import { DepartamentoDTO } from "../dtos/DepartamentoDTO"

//fazer validações
export class DepartamentoService {

    private entityManager: EntityManager
            
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: DepartamentoDTO): Promise<Departamento>{
        const departamento = new Departamento()
        departamento.nome = dto.nome

        return await this.entityManager.getRepository(Departamento).save(departamento)
    }

    async obterTodos(): Promise<Departamento[]>{
        return await this.entityManager.getRepository(Departamento).find()
    }

    async obterPorId(id: number): Promise<Departamento>{
        return await this.entityManager.getRepository(Departamento).findOneBy({ id })
    }

}