import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, DeleteDateColumn } from "typeorm";
import { MonitorAtividade } from "./monitorAtividade";

export enum TipoPessoa {
    MONITOR = "MONITOR",
    ORGANIZADOR = "ORGANIZADOR",
}

@Entity({ name: "pessoas" })
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Index({ unique: true })
    @Column({ type: "char", length: 11 })
    cpf: string; // guarde só dígitos: 12345678901

    @Column({ length: 20, nullable: true })
    celular?: string;

    @Index({ unique: true })
    @Column({ length: 254 })
    email: string;

    @Column({ length: 128, select: false })
    senha: string;

    @Column({
        type: "enum",
        enum: TipoPessoa,
    })
    tipoPessoa: TipoPessoa;

    @OneToMany(() => MonitorAtividade, (monitorAtividade) => monitorAtividade.pessoa)
    monitorAtividade: MonitorAtividade[]

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;
}

export default Pessoa;
