import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Departamento } from "./departamento";
import { Atividade } from "./atividade";

@Entity({ name: "professor" })
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;


    @ManyToOne(() => Departamento, (departamento) => departamento.professor)
    departamento: Departamento

    @OneToMany(() => Atividade, (atividade) => atividade.professor)
    atividade: Atividade[]
}

export default Professor;
