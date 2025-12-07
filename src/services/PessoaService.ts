import { EntityManager } from "typeorm";
import Pessoa from "../models/pessoa";
import { AppDataSource } from "../data-source";
import { PessoaDTO } from "../dtos/PessoaDTO";

//fazer validações
export class PessoaService {

    private entityManager: EntityManager
                           
    constructor(){
        this.entityManager = AppDataSource.manager
    }

    async criar(dto: PessoaDTO): Promise<Pessoa>{
        const pessoa = new Pessoa()
        pessoa.nome = dto.nome
        pessoa.cpf = dto.cpf
        pessoa.celular = dto.celular
        pessoa.email = dto.email
        pessoa.senha = dto.senha //criptografar
        pessoa.tipoPessoa = dto.tipoPessoa

        return await this.entityManager.getRepository(Pessoa).save(pessoa)
    }

    async obterTodos(): Promise<Pessoa[]>{
        return await this.entityManager.getRepository(Pessoa).find()
    }

    async obterPorId(id: number): Promise<Pessoa>{
        return await this.entityManager.getRepository(Pessoa).findOneBy({ id })
    }
}