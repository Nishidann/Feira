import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from "typeorm";
import { Atividade } from "./atividade";
import { Sublocalidade } from "./sublocalidade";

@Entity({ name: "localidade" })
export class Localidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Column({ length: 300 })
    descricao: string;

    @Column()
    qtdSalas: number;


    @OneToMany(() => Atividade, (atividade) => atividade.localidade)
    atividade: Atividade[]

    @OneToMany(() => Sublocalidade, (sublocalidade) => sublocalidade.localidade)
    sublocalidade: Sublocalidade[]

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;

}

export default Localidade;
