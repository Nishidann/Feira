import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Feira } from "./feira";
import { Professor } from "./professor";
import { Localidade } from "./localidade";
import { Sublocalidade } from "./sublocalidade";
import { AgendamentoAtividadeFeira } from "./agendamentoAtividadeFeira";

export enum TipoAtividade {
    SUBLOCALIDADE = "SUBLOCALIDADE",
    LOCALIDADE = "LOCALIDADE",
}

export enum Tipo {
    SECAO = "SECAO",
    CONTINUO = "CONTINUO",
}

export enum Status {
    OCUPADA = "OCUPADA",
    OCIOSA = "OCIOSA",
    INATIVA = "INATIVA",
}


@Entity({ name: "atividade" })
export class Atividade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Column({ length: 300 })
    descricao: string;

    @Column()
    qtdMonitores: number;

    @Column({
        type: "enum",
        enum: TipoAtividade,
    })
    tipoAtividade: TipoAtividade;

    @Column({
        type: "enum",
        enum: Tipo,
    })
    tipo: Tipo;

    @Column()
    duracao_da_secao: number;

    @Column()
    capacidade_de_visitantes: number;

    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;


    @ManyToOne(() => Feira, (feira) => feira.atividade)
    feira: Feira

    @ManyToOne(() => Professor, (professor) => professor.atividade)
    professor: Professor

    @ManyToOne(() => Sublocalidade, (sublocalidade) => sublocalidade.atividade)
    sublocalidade: Sublocalidade

    @ManyToOne(() => Localidade, (localidade) => localidade.atividade)
    localidade: Localidade

    @OneToMany(() => AgendamentoAtividadeFeira, (agendamentoAtividadeFeira) => agendamentoAtividadeFeira.atividade)
    agendamentoAtividadeFeira: AgendamentoAtividadeFeira[]
}

export default Atividade;
