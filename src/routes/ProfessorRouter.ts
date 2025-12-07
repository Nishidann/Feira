import { Router, Request, Response } from "express"
import { ProfessorController } from "../controllers/ProfessorController"
import { ProfessorDTO } from "../dtos/ProfessorDTO"

const professorRouter = Router()
const professorController = new ProfessorController()

professorRouter.post("/professores", (req: Request<{}, {}, ProfessorDTO>, res: Response) => {
    professorController.criar(req, res)
})

professorRouter.get("/professores/:id", (req: Request<{ id: number }>, res: Response) => {
    professorController.obterPorId(req, res)
})

professorRouter.post("/professores", (req: Request, res: Response) => {
    professorController.obterTodos(req, res)
})

export default professorRouter