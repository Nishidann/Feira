import { Request, Response } from "express";
import { MonitorAtividadeService } from "../services/MonitorAtividadeService";
import { MonitorAtividadeDTO } from "../dtos/MonitorAtividadeDTO";

export class MonitorAtividadeController{

    private monitorAtividadeService: MonitorAtividadeService

    constructor(){
        this.monitorAtividadeService = new MonitorAtividadeService()
    }

    async criar(req: Request<{}, {}, MonitorAtividadeDTO>, res: Response): Promise<void>{
        await this.monitorAtividadeService.criar(req.body)

        res.status(201)
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const monitorAtividades = await this.monitorAtividadeService.obterTodos()

        res.status(200).json({ monitorAtividades })
    }

    async obterPorId(req: Request, res: Response): Promise<void>{
        const { id } = req.params
        const monitorAtividade = await this.monitorAtividadeService.obterPorId(Number(id))

        res.status(200).json({ monitorAtividade })
    }
}