import { EntityManager } from "typeorm";
import Pessoa from "../models/pessoa";
import { AppDataSource } from "../data-source";
import { PessoaDTO } from "../dtos/PessoaDTO";
import * as bcrypt from "bcryptjs";

//fazer validações
export class PessoaService {

    private entityManager: EntityManager

    constructor() {
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: PessoaDTO): Promise<Pessoa> {
        const pessoa = new Pessoa()
        pessoa.nome = dto.nome
        pessoa.cpf = dto.cpf
        pessoa.celular = dto.celular
        pessoa.email = dto.email
        pessoa.senha = await bcrypt.hash(dto.senha, 10);
        pessoa.tipoPessoa = dto.tipoPessoa

        return await this.entityManager.getRepository(Pessoa).save(pessoa)
    }

    async obterTodos(): Promise<Pessoa[]> {
        return await this.entityManager.getRepository(Pessoa).find()
    }

    async obterPorId(id: number): Promise<Pessoa> {
        return await this.entityManager.getRepository(Pessoa).findOneByOrFail({ id });
    }

    async alterarPorId(id: number, dto: Partial<PessoaDTO>): Promise<Pessoa> {
        const pessoa = await this.obterPorId(id);
        Object.assign(pessoa, dto);
        return await this.entityManager.getRepository(Pessoa).save(pessoa);
    }

    async deletarPorId(id: number): Promise<Pessoa> {
        const pessoa = await this.obterPorId(id);
        await this.entityManager.getRepository(Pessoa).softDelete({ id });
        return pessoa;
    }
}