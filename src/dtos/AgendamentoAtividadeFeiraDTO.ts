import { Status } from "../models/agendamentoAtividadeFeira"

export class AgendamentoAtividadeFeiraDTO {
    qtdMonitoresInscritos: number
    status: Status
    idAgendamentoFeira: number
    idAtividade: number
}