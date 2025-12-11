import { Router, Request, Response } from "express"
import { FeiraController } from "../controllers/FeiraController"
import { FeiraDTO } from "../dtos/FeiraDTO"

const feiraRouter = Router()
const feiraController = new FeiraController()

feiraRouter.post("/feiras", (req: Request<{}, {}, FeiraDTO>, res: Response) => {
    feiraController.criar(req, res)
})

feiraRouter.get("/feiras/:id", (req: Request, res: Response) => {
    feiraController.obterPorId(req, res)
})

feiraRouter.get("/feiras", (req: Request, res: Response) => {
    feiraController.obterTodos(req, res)
})

export default feiraRouter