import { Request, Response } from "express";
import { FeiraDTO } from "../dtos/FeiraDTO"
import { FeiraService } from "../services/FeiraService";

export class FeiraController{

    private feiraService: FeiraService

    constructor(){
        this.feiraService = new FeiraService()
    }

    async criar(req: Request<{}, {}, FeiraDTO>, res: Response): Promise<void>{
        const feira = await this.feiraService.criar(req.body)

        res.status(201).json({ mensagem: `${feira.nome} criada` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const feiras = await this.feiraService.obterTodos()

        res.status(200).json({ feiras })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const feira = await this.feiraService.obterPorId(id)

        res.status(200).json({ feira })
    }
}