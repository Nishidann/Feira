import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Professor from "../models/professor"
import { ProfessorDTO } from "../dtos/ProfessorDTO"
import Departamento from "../models/departamento"

// falta fazer validações nos métodos
export class ProfessorService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: ProfessorDTO): Promise<Professor> {
        const professor = new Professor()
        console.log(dto.idDepartamento);
        const departamento = await this.entityManager.getRepository(Departamento).findOneBy({ id: dto.idDepartamento })

        professor.nome = dto.nome
        professor.departamento = departamento

        return await this.entityManager.getRepository(Professor).save(professor)
    }

    async obterTodos(): Promise<Professor[]> {
        return await this.entityManager.getRepository(Professor).find({
            relations: {
                departamento: true
            }
        })
    }

    async obterPorId(id: number): Promise<Professor> {
        return await this.entityManager.getRepository(Professor).findOneOrFail({
            where: { id: id },
            relations: {
                departamento: true
            }
        });
    }

    async alterarPorId(id: number, dto: Partial<ProfessorDTO>): Promise<Professor> {
        const professor = await this.obterPorId(id);
        Object.assign(professor, dto);
        return await this.entityManager.getRepository(Professor).save(professor);
    }

    async deletarPorId(id: number): Promise<Professor> {
        const professor = await this.obterPorId(id);
        await this.entityManager.getRepository(Professor).softDelete({ id });
        return professor;
    }
}