import { TipoPessoa } from "../models/pessoa"

export class PessoaDTO {
    nome: string
    cpf: string
    celular: string
    email: string
    senha: string
    tipoPessoa: TipoPessoa
}