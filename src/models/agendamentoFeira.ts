import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import Feira from "./feira";

export enum Turno {
    MANHA = "MANHA",
    TARDE = "TARDE",
    NOITE = "NOITE",
}

@Entity({ name: "agendamentofeira" })
export class AgendamentoFeira {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp" })
    data: Date;

    // Usa um enum para representar o turno (um único valor por agendamento).
    // Não permite inserir outra string que não seja o do enum (já foi testado).
    @Column({
        type: "enum",
        enum: Turno,
    })
    turno: Turno;

    // @ManyToOne(() => Feira)
    // assignee: Feira
}