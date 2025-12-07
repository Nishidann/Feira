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

const routes = Router()

routes.use(
    agendamentoFeiraRouter,
    atividadeRouter,
    departamentoRouter,
    feiraRouter,
    localidadeRouter,
    monitorAtividadeRouter,
    pessoaRouter,
    professorRouter,
    sublocalidadeRouter
)

export default routes