import * as dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./data-source";
import * as express from "express";

const app = express();
const PORT = parseInt(process.env.PORT) // definir variável de ambiente PORT em .env na raíz do projeto

AppDataSource.initialize().then(async () => {

    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");

}).catch(error => console.log(error))
