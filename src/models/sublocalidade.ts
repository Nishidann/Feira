import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, DeleteDateColumn } from "typeorm";
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

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;
}

export default Sublocalidade;
