import "reflect-metadata";
import { DataSource } from "typeorm";

// Definir estas variáveis de ambiente e seus valores em um arquivo .env na raíz do projeto
const host = process.env.DB_HOST
const port = parseInt(process.env.DB_PORT);
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME

export const AppDataSource = new DataSource({
    type: "postgres",
    host,
    port,
    username,
    password,
    database,
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts"/* Feira, Departamento, .... demais classes mapeadas para o banco ficam aqui*/],
    migrations: [],
    subscribers: [],
})
