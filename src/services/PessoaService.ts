import { EntityManager } from "typeorm";
import Pessoa from "../models/pessoa";
import { AppDataSource } from "../data-source";
import { PessoaDTO } from "../dtos/PessoaDTO";

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
        pessoa.senha = dto.senha //criptografar
        pessoa.tipoPessoa = dto.tipoPessoa

        return await this.entityManager.getRepository(Pessoa).save(pessoa)
    }

    async obterTodos(): Promise<Pessoa[]> {
        return await this.entityManager.getRepository(Pessoa).find()
    }

    async obterPorId(id: number): Promise<Pessoa> {
        const pessoa = await this.entityManager.getRepository(Pessoa).findOneBy({ id });
        if (!pessoa) {
            throw new Error('404');
        }
        return pessoa;
    }

    async alterarPorId(id: number, dto: Partial<PessoaDTO>): Promise<Pessoa> {
        const pessoa = await this.obterPorId(id); // reutiliza a lógica e já lança erro se não encontrar
        Object.assign(pessoa, dto);
        return await this.entityManager.getRepository(Pessoa).save(pessoa);
    }

    async deletarPorId(id: number): Promise<Pessoa> {
        const pessoa = await this.obterPorId(id);
        await this.entityManager.getRepository(Pessoa).delete({ id });
        return pessoa;
    }
}