import { Router, Request, Response } from "express"
import { LocalidadeDTO } from "../dtos/LocalidadeDTO"
import { LocalidadeController } from "../controllers/LocalidadeController"

const localidadeRouter = Router()
const localidadeController = new LocalidadeController()

localidadeRouter.post("/localidades", (req: Request<{}, {}, LocalidadeDTO>, res: Response) => {
    localidadeController.criar(req, res)
})

localidadeRouter.get("/localidades/:id", (req: Request, res: Response) => {
    localidadeController.obterPorId(req, res)
})

localidadeRouter.get("/localidades", (req: Request, res: Response) => {
    localidadeController.obterTodos(req, res)
})

export default localidadeRouter