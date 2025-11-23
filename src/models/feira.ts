import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
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
}

export default Feira;
