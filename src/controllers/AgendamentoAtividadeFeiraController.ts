import { Request, Response } from "express";
import { AgendamentoAtividadeFeiraService } from "../services/AgendamentoAtividadeFeiraService";
import { AgendamentoAtividadeFeiraDTO } from "../dtos/AgendamentoAtividadeFeiraDTO";

export class AgendamentoAtividadeFeiraController{

    private agendamentoAtividadeFeiraService: AgendamentoAtividadeFeiraService

    constructor(){
        this.agendamentoAtividadeFeiraService = new AgendamentoAtividadeFeiraService()
    }

    async criar(req: Request<{}, {}, AgendamentoAtividadeFeiraDTO>, res: Response): Promise<void>{
        await this.agendamentoAtividadeFeiraService.criar(req.body)

        res.status(201).json({ mensagem: "Agendamento criado" })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const agendamentoAtividadeFeiras = await this.agendamentoAtividadeFeiraService.obterTodos()

        res.status(200).json({ agendamentoAtividadeFeiras })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const agendamentoAtividadeFeira = await this.agendamentoAtividadeFeiraService.obterPorId(id)

        res.status(200).json({ agendamentoAtividadeFeira })
    }
}