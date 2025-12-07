import { Request, Response } from "express";
import { SublocalidadeService } from "../services/SublocalidadeService";
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO";

export class SublocalidadeController{

    private sublocalidadeService: SublocalidadeService

    constructor(){
        this.sublocalidadeService = new SublocalidadeService()
    }

    async criar(req: Request<{}, {}, SublocalidadeDTO>, res: Response): Promise<void>{
        const sublocalidade = await this.sublocalidadeService.criar(req.body)

        res.status(201).json({ mensagem: `Sublocalidade ${sublocalidade.nome} criada` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const sublocalidades = await this.sublocalidadeService.obterTodos()

        res.status(200).json({ sublocalidades })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const sublocalidade = await this.sublocalidadeService.obterPorId(id)

        res.status(200).json({ sublocalidade })
    }
}