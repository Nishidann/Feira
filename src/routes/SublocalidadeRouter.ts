import { Router, Request, Response } from "express"
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO"
import { SublocalidadeController } from "../controllers/SublocalidadeController"

const sublocalidadeRouter = Router()
const sublocalidadeController = new SublocalidadeController()

sublocalidadeRouter.post("/sublocalidades", (req: Request<{}, {}, SublocalidadeDTO>, res: Response) => {
    sublocalidadeController.criar(req, res)
})

sublocalidadeRouter.get("/sublocalidades/:id", (req: Request<{ id: number }>, res: Response) => {
    sublocalidadeController.obterPorId(req, res)
})

sublocalidadeRouter.get("/sublocalidades", (req: Request, res: Response) => {
    sublocalidadeController.obterTodos(req, res)
})

export default sublocalidadeRouter