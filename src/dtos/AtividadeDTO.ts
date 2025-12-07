import { Status, Tipo, TipoAtividade } from "../models/atividade"

export class AtividadeDTO {
    nome: string
    descricao: string
    qtdMonitores: number
    tipoAtividade: TipoAtividade
    tipo: Tipo
    duracaoSecao: number
    capacidadeVisitantes: number
    status: Status
    idFeira: number
    idProfessor: number
    idSublocalidade: number
    idLocalidade: number
}