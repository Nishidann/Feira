import * as dotenv from "dotenv";
dotenv.config();


import { AppDataSource } from "./data-source";
import * as express from "express";
import routes from "./routes/routes";

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Feira",
      version: "1.0.0",
      description: "Documentação da API Feira"
    },
    servers: [
      {
        url: "http://localhost:" + (process.env.PORT || 3000),
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

const PORT = parseInt(process.env.PORT);

AppDataSource.initialize().then(async () => {
  app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
  });
  console.log("Data Source has been initialized!");
}).catch(error => console.log(error));
