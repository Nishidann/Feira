import { EntityManager } from "typeorm"
import { AppDataSource } from "../data-source"
import Atividade from "../models/atividade"
import { AtividadeDTO } from "../dtos/AtividadeDTO"
import Feira from "../models/feira"
import Professor from "../models/professor"
import Sublocalidade from "../models/sublocalidade"

export class AtividadeService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: AtividadeDTO): Promise<Atividade> {
        const feira = await this.entityManager.getRepository(Feira).findOneByOrFail({ id: dto.idFeira })
        const professor = await this.entityManager.getRepository(Professor).findOneByOrFail({ id: dto.idProfessor })
        const sublocalidade = await this.entityManager.getRepository(Sublocalidade).findOneBy({ id: dto.idSublocalidade })

        const atividade = new Atividade()
        atividade.nome = dto.nome
        atividade.descricao = dto.descricao
        atividade.qtdMonitores = dto.qtdMonitores
        atividade.tipoAtividade = dto.tipoAtividade
        atividade.tipo = dto.tipo
        atividade.duracaoSecao = dto.duracaoSecao
        atividade.capacidadeVisitantes = dto.capacidadeVisitantes
        atividade.status = dto.status
        atividade.feira = feira
        atividade.professor = professor
        atividade.sublocalidade = sublocalidade
        //essa parte ta dando erro
        // atividade.localidade = sublocalidade.localidade

        return await this.entityManager.getRepository(Atividade).save(atividade)
    }

    async obterTodos(): Promise<Atividade[]> {
        return await this.entityManager.getRepository(Atividade).find({
            loadRelationIds: true
        })
    }

    async obterPorId(id: number): Promise<Atividade> {
        return await this.entityManager.getRepository(Atividade).findOneOrFail({
            where: { id: id },
            relations: {
                professor: true,
                sublocalidade: true,
                feira: true
            }
        })
    }

    async alterarPorId(id: number, dto: Partial<AtividadeDTO>): Promise<Atividade> {

        const atividade = await this.obterPorId(id);
        const feira = await this.entityManager.getRepository(Feira).findOneByOrFail({ id: dto.idFeira })
        const professor = await this.entityManager.getRepository(Professor).findOneByOrFail({ id: dto.idProfessor })
        const sublocalidade = await this.entityManager.getRepository(Sublocalidade).findOneByOrFail({ id: dto.idSublocalidade })

        atividade.feira = feira;
        atividade.professor = professor;
        atividade.sublocalidade = sublocalidade;

        Object.assign(atividade, dto);
        return await this.entityManager.getRepository(Atividade).save(atividade);
    }

    async deletarPorId(id: number): Promise<Atividade> {
        const atividade = await this.obterPorId(id);
        await this.entityManager.getRepository(Atividade).softDelete({ id });
        return atividade;
    }
}