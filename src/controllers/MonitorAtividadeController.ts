import { Request, Response } from "express";
import { MonitorAtividadeService } from "../services/MonitorAtividadeService";
import { MonitorAtividadeDTO } from "../dtos/MonitorAtividadeDTO";

export class MonitorAtividadeController {

    private monitorAtividadeService: MonitorAtividadeService

    constructor() {
        this.monitorAtividadeService = new MonitorAtividadeService()
    }

    async criar(req: Request<{}, {}, MonitorAtividadeDTO>, res: Response): Promise<void> {
        try {
            await this.monitorAtividadeService.criar(req.body)

            res.status(201).json({ mensagem: `Monitor Atividade criado` })
        }
        catch (error) {
            res.status(500).json({ message: 'Erro interno' });
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const monitorAtividades = await this.monitorAtividadeService.obterTodos()

            res.status(200).json({ monitorAtividades })
        }
        catch (error) {
            res.status(500).json({ message: 'Erro interno' });
        }

    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const monitorAtividade = await this.monitorAtividadeService.obterPorId(Number(id))

            res.status(200).json({ monitorAtividade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Monitor atividade não encontrada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
    async alterarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const monitorAtividade = await this.monitorAtividadeService.obterPorId(Number(id))
            await this.monitorAtividadeService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ monitorAtividade });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Monitor atividade não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar Monitor atividade!',
                });
            }
        }
    }
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const monitorAtividade = await this.monitorAtividadeService.deletarPorId(Number(id))
            if (!monitorAtividade) {
                throw new Error();
            }
            res.status(200).json({})
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Monitor atividade não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}