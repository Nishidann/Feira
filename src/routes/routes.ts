import { Router } from "express";
import departamentoRouter from "./DepartamentoRouter";
import professorRouter from "./ProfessorRouter";
import feiraRouter from "./FeiraRouter";
import agendamentoFeiraRouter from "./AgendamentoFeiraRouter";
import atividadeRouter from "./AtividadeRouter";
import localidadeRouter from "./LocalidadeRouter";
import monitorAtividadeRouter from "./MonitorAtividadeRouter";
import pessoaRouter from "./PessoaRouter";
import sublocalidadeRouter from "./SublocalidadeRouter";
import authRouter from "./AuthRouter";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { TipoPessoa } from "../models/pessoa";
import { authMiddleware } from "../middlewares/authMiddleware";

const routes = Router()

routes.use(authRouter);
routes.use(pessoaRouter);

routes.use(authMiddleware);

routes.use(
    roleMiddleware([TipoPessoa.MONITOR, TipoPessoa.ORGANIZADOR]),
    monitorAtividadeRouter
);

routes.use(
    roleMiddleware([TipoPessoa.ORGANIZADOR]),
    departamentoRouter,
    professorRouter,
    feiraRouter,
    agendamentoFeiraRouter,
    atividadeRouter,
    localidadeRouter,
    sublocalidadeRouter
);

export default routes