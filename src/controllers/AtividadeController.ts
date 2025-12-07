import { Request, Response } from "express";
import { AtividadeService } from "../services/AtividadeService";
import { AtividadeDTO } from "../dtos/AtividadeDTO";

export class AtividadeController{

    private atividadeService: AtividadeService

    constructor(){
        this.atividadeService = new AtividadeService()
    }

    async criar(req: Request<{}, {}, AtividadeDTO>, res: Response): Promise<void>{
        const atividade = await this.atividadeService.criar(req.body)

        res.status(201).json({ mensagem: `Atividade ${atividade.nome} criada` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const atividades = await this.atividadeService.obterTodos()

        res.status(200).json({ atividades })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const atividade = await this.atividadeService.obterPorId(id)

        res.status(200).json({ atividade })
    }
}