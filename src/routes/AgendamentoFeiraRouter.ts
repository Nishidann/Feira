import { Router, Request, Response } from "express"
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO"
import { AgendamentoFeiraController } from "../controllers/AgendamentoFeiraController"

const agendamentoFeiraRouter = Router()
const agendamentoFeiraController = new AgendamentoFeiraController()

agendamentoFeiraRouter.post("/agendamentos/feira", (req: Request<{}, {}, AgendamentoFeiraDTO>, res: Response) => {
    agendamentoFeiraController.criar(req, res)
})

agendamentoFeiraRouter.get("/agendamentos/feira/:id", (req: Request<{ id: number }>, res: Response) => {
    agendamentoFeiraController.obterPorId(req, res)
})

agendamentoFeiraRouter.get("/agendamentos/feira", (req: Request, res: Response) => {
    agendamentoFeiraController.obterTodos(req, res)
})

export default agendamentoFeiraRouter