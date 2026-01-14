import { Request, Response } from "express";
import { AtividadeService } from "../services/AtividadeService";
import { AtividadeDTO } from "../dtos/AtividadeDTO";

export class AtividadeController {

    private atividadeService: AtividadeService

    constructor() {
        this.atividadeService = new AtividadeService()
    }

    async criar(req: Request<{}, {}, AtividadeDTO>, res: Response): Promise<void> {
        try {

            const atividade = await this.atividadeService.criar(req.body)

            res.status(201).json({ mensagem: `Atividade ${atividade.nome} criada` })
        }
        catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Professor, sublocalidade ou feira não encontrado!',
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
            const atividades = await this.atividadeService.obterTodos()

            res.status(200).json({ atividades })
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
            const atividade = await this.atividadeService.obterPorId(Number(id))

            res.status(200).json({ atividade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Atividade não encontrada!',
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
            const agendamentoAtividade = await this.atividadeService.obterPorId(Number(id))
            await this.atividadeService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ agendamentoAtividade });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Professor, sublocalidade ou feira não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro do servidor!'
                });
            }
        }
    }

    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const agendamentoAtividade = await this.atividadeService.deletarPorId(Number(id))
            if (!agendamentoAtividade) {
                throw new Error();
            }
            res.status(200).json({ agendamentoAtividade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Atividade não encontrada!',
                });
            }
            else {
                res.status(500).json({
                    message: 'Erro do servidor!'
                });
            }
        }
    }
}