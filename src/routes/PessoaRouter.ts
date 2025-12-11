import { Router, Request, Response } from "express"
import { PessoaDTO } from "../dtos/PessoaDTO"
import { PessoaController } from "../controllers/PessoaController"

const pessoaRouter = Router()
const pessoaController = new PessoaController()

pessoaRouter.post("/pessoas", (req: Request<{}, {}, PessoaDTO>, res: Response) => {
    pessoaController.criar(req, res)
})

pessoaRouter.get("/pessoas/:id", (req: Request, res: Response) => {
    pessoaController.obterPorId(req, res)
})

pessoaRouter.get("/pessoas", (req: Request, res: Response) => {
    pessoaController.obterTodos(req, res)
})

export default pessoaRouter