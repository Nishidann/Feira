import { Router, Request, Response } from "express"
import { MonitorAtividadeDTO } from "../dtos/MonitorAtividadeDTO"
import { MonitorAtividadeController } from "../controllers/MonitorAtividadeController"

const monitorAtividadeRouter = Router()
const monitorAtividadeController = new MonitorAtividadeController()

monitorAtividadeRouter.post("/monitores/atividade", (req: Request<{}, {}, MonitorAtividadeDTO>, res: Response) => {
    monitorAtividadeController.criar(req, res)
})

monitorAtividadeRouter.get("/monitores/atividade/:id", (req: Request<{ id: number }>, res: Response) => {
    monitorAtividadeController.obterPorId(req, res)
})

monitorAtividadeRouter.get("/monitores/atividade", (req: Request, res: Response) => {
    monitorAtividadeController.obterTodos(req, res)
})

export default monitorAtividadeRouter