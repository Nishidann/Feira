import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
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
    qtd_salas: number;


    @OneToMany(() => Atividade, (atividade) => atividade.localidade)
    atividade: Atividade[]

    @OneToMany(() => Sublocalidade, (sublocalidade) => sublocalidade.localidade)
    sublocalidade: Sublocalidade[]

}

export default Localidade;
