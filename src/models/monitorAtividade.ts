import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column, DeleteDateColumn } from "typeorm";
import { AgendamentoAtividadeFeira } from "./agendamentoAtividadeFeira";
import { Pessoa } from "./pessoa";

@Entity({ name: "monitoratividade" })
export class MonitorAtividade {
    @PrimaryGeneratedColumn()
    id: number;

    //cria um timestamp calculando a horário
    @CreateDateColumn({ type: "timestamptz", nullable: false })
    horaEntrada: Date;

    @Column({ type: "timestamptz", nullable: false })
    horaSaida: Date;

    @ManyToOne(() => AgendamentoAtividadeFeira, (agendamentoAtividadeFeira) => agendamentoAtividadeFeira.monitoratividade)
    agendamentoAtividadeFeira: AgendamentoAtividadeFeira

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.monitorAtividade)
    pessoa: Pessoa

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;
}

export default MonitorAtividade;
