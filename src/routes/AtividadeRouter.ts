import { Router, Request, Response } from "express"
import { AtividadeDTO } from "../dtos/AtividadeDTO"
import { AtividadeController } from "../controllers/AtividadeController"

const atividadeRouter = Router()
const atividadeController = new AtividadeController()

atividadeRouter.post("/atividades", (req: Request<{}, {}, AtividadeDTO>, res: Response) => {
    atividadeController.criar(req, res)
})

atividadeRouter.get("/atividades/:id", (req: Request, res: Response) => {
    atividadeController.obterPorId(req, res)
})

atividadeRouter.get("/atividades", (req: Request, res: Response) => {
    atividadeController.obterTodos(req, res)
})

export default atividadeRouter