import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from "typeorm";
import { Professor } from "./professor";

@Entity({ name: "departamento" })
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;


    @OneToMany(() => Professor, (professor) => professor.departamento)
    professor: Professor[]

    @DeleteDateColumn({ name: "deleted_at", type: "timestamp", nullable: true })
    deletedAt?: Date;
}

export default Departamento;
