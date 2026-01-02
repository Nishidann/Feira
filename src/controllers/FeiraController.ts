import { Request, Response } from "express";
import { FeiraDTO } from "../dtos/FeiraDTO"
import { FeiraService } from "../services/FeiraService";

export class FeiraController {

    private feiraService: FeiraService

    constructor() {
        this.feiraService = new FeiraService()
    }

    async criar(req: Request<{}, {}, FeiraDTO>, res: Response): Promise<void> {
        try {
            const feira = await this.feiraService.criar(req.body)

            res.status(201).json({ mensagem: `${feira.nome} criada` })
        }
        catch (error) {
            if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const feiras = await this.feiraService.obterTodos()
            if (!feiras) {
                throw new Error();
            }
            res.status(200).json({ feiras })
        }
        catch (error) {
            res.status(500).json({
                message: 'Erro ao buscar feiras!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const feira = await this.feiraService.obterPorId(Number(id))

            if (!feira) {
                throw new Error();
            }
            res.status(200).json({ feira })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Feira não encontrada!',
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
            const feira = await this.feiraService.obterPorId(Number(id))
            await this.feiraService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ feira });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Feira não encontrada!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar feiras!',
                });
            }
        }
    }
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const feira = await this.feiraService.deletarPorId(Number(id))
            if (!feira) {
                throw new Error();
            }
            res.status(200).json({})
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Feira não encontrada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}