import { Request, Response } from "express";
import { LocalidadeDTO } from "../dtos/LocalidadeDTO";
import { LocalidadeService } from "../services/LocalidadeService";

export class LocalidadeController{

    private localidadeService: LocalidadeService

    constructor(){
        this.localidadeService = new LocalidadeService()
    }

    async criar(req: Request<{}, {}, LocalidadeDTO>, res: Response): Promise<void>{
        const localidade = await this.localidadeService.criar(req.body)

        res.status(201).json({ mensagem: `Localidade ${localidade.nome} criada` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const localidades = await this.localidadeService.obterTodos()

        res.status(200).json({ localidades })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const localidade = await this.localidadeService.obterPorId(id)

        res.status(200).json({ localidade })
    }
}