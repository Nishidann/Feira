import { Request, Response } from "express";
import { DepartamentoDTO } from "../dtos/DepartamentoDTO";
import { DepartamentoService } from "../services/DepartamentoService";

export class DepartamentoController{

    private departamentoService: DepartamentoService

    constructor(){
        this.departamentoService = new DepartamentoService()
    }

    async criar(req: Request<{}, {}, DepartamentoDTO>, res: Response): Promise<void>{
        const departamento = await this.departamentoService.criar(req.body)

        res.status(201).json({ mensagem: `Departamento ${departamento.nome} criado` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const departamentos = await this.departamentoService.obterTodos()

        res.status(200).json({ departamentos })
    }

    async obterPorId(req: Request, res: Response): Promise<void>{
        const { id } = req.params
        const departamento = await this.departamentoService.obterPorId(Number(id))

        res.status(200).json({ departamento })
    }
}