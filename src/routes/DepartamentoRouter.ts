import { Router, Request, Response } from "express"
import { DepartamentoController } from "../controllers/DepartamentoController"
import { DepartamentoDTO } from "../dtos/DepartamentoDTO"

const departamentoRouter = Router()
const departamentoController = new DepartamentoController()

departamentoRouter.post("/departamentos", (req: Request<{}, {}, DepartamentoDTO>, res: Response) => {
    departamentoController.criar(req, res)
})

departamentoRouter.get("/departamentos/:id", (req: Request<{ id: number }>, res: Response) => {
    departamentoController.obterPorId(req, res)
})

departamentoRouter.get("/departamentos", (req: Request, res: Response) => {
    departamentoController.obterTodos(req, res)
})

export default departamentoRouter