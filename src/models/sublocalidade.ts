import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Atividade } from "./atividade";
import { Localidade } from "./localidade";

@Entity({ name: "sublocalidade" })
export class Sublocalidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Column({ length: 300 })
    descricao: string;

    @OneToMany(() => Atividade, (atividade) => atividade.sublocalidade)
    atividade: Atividade[]

    @ManyToOne(() => Localidade, (localidade) => localidade.sublocalidade)
    localidade: Localidade

}

export default Sublocalidade;
