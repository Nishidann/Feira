import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "feira" })
export class Feira {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;
}

export default Feira;

