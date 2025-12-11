import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Professor } from "./professor";

@Entity({ name: "departamento" })
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;


    @OneToMany(() => Professor, (professor) => professor.departamento)
    professor: Professor[]
}

export default Departamento;
