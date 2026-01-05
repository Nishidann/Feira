import { Turno } from "../models/agendamentoFeira"

export class AgendamentoFeiraDTO {
    data: Date
    turno: Turno
    qtdAlunosSuportados: number
    idFeira: number
}