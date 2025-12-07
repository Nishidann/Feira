import { Request, Response } from "express";
import { AgendamentoFeiraService } from "../services/AgendamentoFeiraService";
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO";

export class AgendamentoFeiraController{

    private agendamentoFeiraService: AgendamentoFeiraService

    constructor(){
        this.agendamentoFeiraService = new AgendamentoFeiraService()
    }

    async criar(req: Request<{}, {}, AgendamentoFeiraDTO>, res: Response): Promise<void>{
        await this.agendamentoFeiraService.criar(req.body)

        res.status(201).json({ mensagem: "Agendamento criado" })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const agendamentos = await this.agendamentoFeiraService.obterTodos()

        res.status(200).json({ agendamentos })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const agendamento = await this.agendamentoFeiraService.obterPorId(id)

        res.status(200).json({ agendamento })
    }
}