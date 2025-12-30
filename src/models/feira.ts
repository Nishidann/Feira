import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from "typeorm";
import { AgendamentoFeira } from "./agendamentoFeira";
import { Atividade } from "./atividade";

@Entity({ name: "feira" })
export class Feira {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;


    @OneToMany(() => AgendamentoFeira, (agendamentoFeira) => agendamentoFeira.feira)
    agendamentoFeira: AgendamentoFeira[]

    @OneToMany(() => Atividade, (atividade) => atividade.feira)
    atividade: Atividade[]

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;
}

export default Feira;
