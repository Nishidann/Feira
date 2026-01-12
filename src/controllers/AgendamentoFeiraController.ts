import { Request, Response } from "express";
import { AgendamentoFeiraService } from "../services/AgendamentoFeiraService";
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO";

export class AgendamentoFeiraController {

    private agendamentoFeiraService: AgendamentoFeiraService

    constructor() {
        this.agendamentoFeiraService = new AgendamentoFeiraService()
    }

    async criar(req: Request<{}, {}, AgendamentoFeiraDTO>, res: Response): Promise<void> {
        try {

            await this.agendamentoFeiraService.criar(req.body)

            res.status(201).json({ mensagem: "Agendamento da feira criado" })
        }
        catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Id da feira não encontrado!',
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
            const agendamentos = await this.agendamentoFeiraService.obterTodos()

            res.status(200).json({ agendamentos })
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
            const agendamento = await this.agendamentoFeiraService.obterPorId(Number(id))

            res.status(200).json({ agendamento })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da feira não encontrado!',
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
            const agendamentoFeira = await this.agendamentoFeiraService.obterPorId(Number(id))
            await this.agendamentoFeiraService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ agendamentoFeira });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da feira não encontrado!',
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
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const agendamentoFeira = await this.agendamentoFeiraService.deletarPorId(Number(id))
            if (!agendamentoFeira) {
                throw new Error();
            }
            res.status(200).json({ agendamentoFeira })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Agendamento da feira não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}