import { Request, Response } from "express";
import { AgendamentoAtividadeFeiraService } from "../services/AgendamentoAtividadeFeiraService";
import { AgendamentoAtividadeFeiraDTO } from "../dtos/AgendamentoAtividadeFeiraDTO";

export class AgendamentoAtividadeFeiraController {

    private agendamentoAtividadeFeiraService: AgendamentoAtividadeFeiraService

    constructor() {
        this.agendamentoAtividadeFeiraService = new AgendamentoAtividadeFeiraService()
    }

    async criar(req: Request<{}, {}, AgendamentoAtividadeFeiraDTO>, res: Response): Promise<void> {
        try {
            await this.agendamentoAtividadeFeiraService.criar(req.body)

            res.status(201).json({ mensagem: "Agendamento da atividade criado" })
        }
        catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Atividade ou agendamento da feira não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro do servidor!',
                });
            }
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const agendamentoAtividadeFeiras = await this.agendamentoAtividadeFeiraService.obterTodos()

            res.status(200).json({ agendamentoAtividadeFeiras })
        }
        catch (error) {
            res.status(500).json({
                message: 'Erro do servidor!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const agendamentoAtividadeFeira = await this.agendamentoAtividadeFeiraService.obterPorId(Number(id))

            res.status(200).json({ agendamentoAtividadeFeira })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da atividade não encontrado!',
                });
            }
            else {
                res.status(500).json({
                    message: 'Erro do servidor!',
                });
            }
        }
    }

    async alterarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const agendamentoAtividade = await this.agendamentoAtividadeFeiraService.obterPorId(Number(id))
            await this.agendamentoAtividadeFeiraService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ agendamentoAtividade });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da atividade, atividade ou agendamento da feira não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar departamento!',
                });
            }
        }
    }

    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const agendamentoAtividade = await this.agendamentoAtividadeFeiraService.deletarPorId(Number(id))
            if (!agendamentoAtividade) {
                throw new Error();
            }
            res.status(200).json({ agendamentoAtividade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da atividade não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}