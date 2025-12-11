import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { AgendamentoFeira } from "./agendamentoFeira";
import { MonitorAtividade } from "./monitorAtividade";
import { Atividade } from "./atividade";

export enum Status {
    OCUPADO = "OCUPADO",
    DISPONIVEL = "DISPONIVEL",
}

@Entity({ name: "agendamentoatividadefeira" })
export class AgendamentoAtividadeFeira {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qtdMonitoresInscritos: number;

    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;

    @ManyToOne(() => AgendamentoFeira, (agendamentoFeira) => agendamentoFeira.agendamentoAtividadeFeira)
    agendamentoFeira: AgendamentoFeira

    @ManyToOne(() => Atividade, (atividade) => atividade.agendamentoAtividadeFeira)
    atividade: Atividade

    @OneToMany(() => MonitorAtividade, (monitoratividade) => monitoratividade.agendamentoAtividadeFeira)
    monitoratividade: MonitorAtividade[]

}
export default AgendamentoAtividadeFeira;
